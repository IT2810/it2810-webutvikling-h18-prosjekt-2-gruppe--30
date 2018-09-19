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

## App-komponenten 
**Skriv etter vi har forsøkt å flytte funksjoner ut**

## FetchImage-komponenten

## FetchText-komponenten

## LoadSound-komponenten
*LoadSound* sørger for at lyd lastes, avspilles og pauses. Dette er nok den minst elegante av komponentene. Der *FetchImage* og *FetchText* lastes dynamisk gjennom *fetch* *path* basert på *states*, er alle lydfilene hardkodet inn med en stor *switch* som bestemmer hvilken som er aktiv.

Selv om det ikke var stilt noen krav til dynamisk lasting av lydfilene, er dette ikke en implementering vi er fornøyde med. Ønsket var å få til en implementasjon lik de ovennevnte komponentene, men vi fant ikke en måte å gjøre dette på som ikke involverte bruk av biblioteker.

## MediaList-komponenten
*MediaList*-komponenten sørger for funksjonaliteten til radioknappene. Den tar inn tre funksjoner som *props* fra *App*, som kalles når det klikkes på en ikke-valgt knapp. Dette fører til at *App* sin *state* tilsvarer de valgte radioknappene.

Videre vil et klikk på en ikke-valgt musikkategori føre til at musikken stanses. Dette blir gjort for å sikre at to lydklipp fra forskjellige kategorier ikke kan spilles av samtidig – et problem som er en følge av den uelegante implementasjonen av innlasting av lyd.

## Tabs-komponenten

### Tab-komponenten

## Title-komponenten
