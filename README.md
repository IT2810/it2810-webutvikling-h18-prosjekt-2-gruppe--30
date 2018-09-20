# it2810-webutvikling-h18-prosjekt-2-gruppe--30


# Oppfyllelse av krav

  

## Innhold og funksjonalitet

Startsiden for nettsiden er en tom utstilling uten lastet innhold. Innholdet blir først lastet når det blir valgt kategori. Løsningen er som beskrevet i oppgaveteksten ved at man kan velge mellom 3 kategorier for hver mediatype og skifte mellom 4 faner for forskjellige sammensetninger av kategoriene.

  

Mediafilene som er brukt er lagret i prosjektets *public*-folder, og grupperes på mediatype og kategori. For bildene er det brukt SVG, for teksten JSON og for lydene mp3.

  

Design og layout er inspirert av forslaget i oppgaveteksten da det var et ryddig og relativt enkelt oppsett å lage fra bunnen av i React. Nettsiden er satt sammen av en rekke komponenter, som er beskrevet under.

  

Løsningen har et responsivt design: På store skjermer har vi fokusert på å få alt på nettsiden i ett bilde for å slippe scrolling, mens det på mindre enheter blir mer scrolling for å beholde en viss størrelse på elementene. Hvilke teknologier som er brukt i implementeringen av responsivt design, og øvrige løsninger, er også beskrevet lenger ned.


## Komponentene

  
### App
App er hovedkomponenten i et React-prosjekt. App kan ses på som roten i et tre med alle child-komponentene(se figur).
Vi har brukt funksjoner for å sette _state_ til riktig valgt kategori, disse funksjonene blir sendt til _MediaList_ som props, og kan kalles fra child-komponenten. For å få en ryddigere og kortere component ble noen av metodene flyttet til _Utils.js_ og implementert som javascript-funksjoner. 
  

### FetchText
_FetchText_-komponenten sørger for å laste inn teksten fra json filene. Vi valgte å bruke  _fetch_-APIet til dette, som beskrevet under *teknologier* lenger ned. Komponenten bygges opp ved at  _fetchText_-funksjonen får satt opp en  _path_  til riktig fil den skal fetche. Denne pathen blir satt opp ved at en string fra _MediaList_-komponenten sammen med en generert distinkt verdi sendes til komponenten som _props_.

### FetchImage
  _FetchImage_ bruker mye av samme teknologi og struktur som _FetchText_. _Props_ og metoden _componentDidUpdate_ blir brukt på nærmest eksakt samme måte. For å lese svg-filene brukes _.text_-kallet på responsen fra metoden. Her returneres en _string_ som lagres i komponentens state. Denne teksten blir oversatt til _XML_ og det faktiske bildet blir lagt til som et objekt i nettsidens DOM ved å bruke _dangerouslySetInnerHTML_.

### LoadSound

*LoadSound* sørger for at lyd lastes, avspilles og pauses. Dette er nok den minst elegante av komponentene. Der *FetchImage* og *FetchText* lastes dynamisk gjennom *fetch* *path* basert på *states*, er alle lydfilene hardkodet inn med en stor *switch* som bestemmer hvilken som er aktiv.

  

Selv om det ikke var stilt noen krav til dynamisk lasting av lydfilene, er dette ikke en implementering vi er fornøyde med. Ønsket var å få til en implementasjon lik de ovennevnte komponentene, men vi fant ikke en måte å gjøre dette på som ikke involverte bruk av biblioteker.

  

### MediaList

*MediaList*-komponenten sørger for funksjonaliteten til radioknappene. Den tar inn tre funksjoner som *props* fra *App*, som kalles når det klikkes på en ikke-valgt knapp. Dette fører til at *App* sin *state* tilsvarer de valgte radioknappene.

  

Videre vil et klikk på en ikke-valgt musikkategori føre til at musikken stanses. Dette blir gjort for å sikre at to lydklipp fra forskjellige kategorier ikke kan spilles av samtidig – et problem som er en følge av den uelegante implementasjonen av innlasting av lyd.

  

### Tabs

*Tabs*-komponenten binder alle *Tab* komponentene sammen til et *tab-panel*. Inne i komponenten settes det opp en *tab-list* og *panel-content*. Grunnen til at vi har valgt denne strukturen er at det ble veldig greit og sette opp flexbox for å kontrollere disse delene. Vi kunne da kontrollere både listen med tab-knapper (*tab-list*) for seg selv, samtidig som vi kunne sette opp flexbok for *panel-content*, og sette dette opp som vi ville.

  

Om en fane vises eller skjules bestemmes i css-koden, gjennom en endring i *className*. Til å gjøre denne endringen brukes ES6 Template strings. Dette gjør at vi kan sette opp en string, hvor vi kan endre deler av denne ved å bruke ${expression} inne i stringen.

  

### Tab

*Tab*-komponenten er komponenten som blir brukt internt i *Tabs* (*Tabs er foreldre-komponenten til en *Tab**). Denne komponenten setter opp strukturen og definerer utformingen på en tab.

### TabContent

I denne komponenten blir alle elemetene – bilde, tekst og lyd – satt sammen i en _tab_. Vi har brukt grid for å sette strukturen på større skjermer, og tilpasset innholdet på mindre enheter der alt kommer under hverandre.

### Title
Vi har brukt en veldig enkel tittel-komponent for å bli kjent med hva en komponent gjør.

  
  
  

## Teknologi

### React

Løsningen er basert på React, og JSX med komponenter som beskrevet over. Bare ordinære React-mekanismer er tatt i bruk, og samtlige UI-komponenter er implementert fra bunnen av.

  

### AJAX

Vi har brukt fetch, som er et api for å laste innhold på nettsiden. Vår nettside fungerer slik at innholdet blir først lastet, lagret og vist når kategoriene velges. Det betyr at om man går frem og tilbake mellom fanene på siden vil ikke innholdet lastes på nytt hver gang. 

  
### Responsive Web Design

Løsningen har et responsivt design som beskrevet i oppgaveteksten.

Vi bruker meta-tagen _viewport_ i index.html filen for å gi instruksjoner til nettleseren om hvordan sidens dimensjoner og skalering skal kontrolleres.

Media-queries brukes til å justere skalering av bilder og tekst etter forskjellige skjermbredde-breakpoints. Vi valgte å bruke **w3schools**  sitt standard forslag til  _device breakpoints_ som utgangspunkt, for å ha en standard å forholde seg til. Denne metoden gjorde det enkelt å teste ut forskjellige breakpoints, og se resultatet direkte, takket være chromes utviklerverktøy. 

Vi endte også opp med å måtte lage en egen case for iPhone 5S, da denne var den smaleste telefonen. Her lagde vi et eget breakpoint for å håndtere så smale skjermer.

For flytende layout valgte vi å bruke en kombinasjon av flexbox og grid. Flexbox brukes for den overordnede layouten mellom tittel, radioknapper og kunstverk, mens grid brukes innad i et kunstverk, ettersom den ønskede layouten her er vanskeligere å implementere i flexbox.

I implementasjonen av layouten var det største spørsmålet hvilket element som skulle ligge øverst på en smal skjerm. Valget vårt falt på at fanene med kunstverkene legger seg under radioknappene. Dette følte vi var det mest naturlige, ettersom man må velge kategori først, før man scroller ned på siden for å se kunstverkene.


### Testing
For å teste websiden brukte vi hovedsakelig chromes *device toolbar*. Der fikk vi muligheten til å sette viewporten på skjermen til kjente telefoner og rotere disse i både horisontal og vertikal modus. Vi gikk gjennom de forskjellige enhetene og sikret at all funksjonalitet oppførte seg likt og at elementene hadde riktig plassering, skalering of flyt. Vi har også testet at websiden fungerer på alle våre fysiske telefoner (iPhone 5s, Honor 8, Samsung Galaxy S9+), på alle våre tre PC’er, samt en Samsung Galaxy Tab.

## Komponentstruktur

<a href="https://ibb.co/kpWY7K"><img src="https://preview.ibb.co/gy3fnK/Untitled_Diagram.jpg" alt="Untitled_Diagram" border="0"></a>
