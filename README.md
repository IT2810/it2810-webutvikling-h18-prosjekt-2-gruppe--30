# it2810-webutvikling-h18-prosjekt-2-gruppe--30

## Get started
```
$ npm install
$ cd utstilling
$ npm start
```
# Diskusjon rundt funksjonalitet

## Overordnet funksjonalitet
Nettsiden er bygget opp av 7 komponenter  i tillegg til App.js.... **Skriv mer**


## Komponenter
### App-komponenten 
**Skriv etter vi har forsøkt å flytte funksjoner ut**

### FetchText-komponenten
*FetchText*-komponenten sørger for å laste inn teksten fra json filene. Vi valgte å bruke *fetch*-APIet til dette, da vi synes dette var en grei måte og da vi ønsket å lære dette APIet til senere. Vi tenkte også at ved å først lære *fetch*-APIet – som er et JavaScript API – vil vi ha en bedre grunnforståelse om vi senere ønsker å benytte pakker som for eksempel axios. *Fetch*-komponenten er bygget opp vet at *fetchText*-funksjonen får satt opp en *path* til riktig fil den skal fetche. Denne pathen blir satt opp ved at *props* sendes inn til komponenten (henholdsvis en string fra *MediaList*-komponenten og en generert distinkt verdi). Videre brukes den innebygde react-funksjonen *componentDidUpdate* for å sjekke om *path* propen har blitt endret. Dersom nåværende *prop* er forskjellig fra den forrige vil *fetchText* kjøres på nytt og du vil da laste et nytt random distinkt innhold.

I *FetchText.css* brukte vi også *media queries* for å justere teksten etter forskjellig skjermstørrelse, og gjøre dette responsivt. Til disse queriene valgte vi å bruke **w3schools** sitt standard forslag til *device breakpoints*. Slik kunne vi holde en enkel og funksjonell standard gjennom prosjektet.     

### FetchImage-komponenten
*FetchImage* bruker mye av samme teknologi og struktur som *FetchText*. *Props* og metoden *componentDidUpdate* blir brukt på nærmest eksakt samme måte. For å lese svg-filene bruker vi *.text*-kallet på responsen fra metoden. Her returneres en *string* som lagres i komponentens state. Denne teksten blir oversatt til *XML* og det faktiske bildet blir lagt til som et objekt i nettsidens DOM ved å bruke *dangerouslySetInnerHTML*. 

### LoadSound-komponenten
*LoadSound* sørger for at lyd lastes, avspilles og pauses. Dette er nok den minst elegante av komponentene. Der *FetchImage* og *FetchText* lastes dynamisk gjennom *fetch* *path* basert på *states*, er alle lydfilene hardkodet inn med en stor *switch* som bestemmer hvilken som er aktiv.

Selv om det ikke var stilt noen krav til dynamisk lasting av lydfilene, er dette ikke en implementering vi er fornøyde med. Ønsket var å få til en implementasjon lik de ovennevnte komponentene, men vi fant ikke en måte å gjøre dette på som ikke involverte bruk av biblioteker.

### MediaList-komponenten
*MediaList*-komponenten sørger for funksjonaliteten til radioknappene. Den tar inn tre funksjoner som *props* fra *App*, som kalles når det klikkes på en ikke-valgt knapp. Dette fører til at *App* sin *state* tilsvarer de valgte radioknappene.

Videre vil et klikk på en ikke-valgt musikkategori føre til at musikken stanses. Dette blir gjort for å sikre at to lydklipp fra forskjellige kategorier ikke kan spilles av samtidig – et problem som er en følge av den uelegante implementasjonen av innlasting av lyd.

### Tabs-komponenten

### Tab-komponenten

### Title-komponenten


<a href="https://ibb.co/kpWY7K"><img src="https://preview.ibb.co/gy3fnK/Untitled_Diagram.jpg" alt="Untitled_Diagram" border="0"></a>
