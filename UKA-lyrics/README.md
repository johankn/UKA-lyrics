# Dokumentasjon

## UKA-lyrics

### Tema for prosjektet

- Det nærmer seg UKA23 og studentene trenger å øve på sangtekstene til artistene som kommer til Trondheim. Vi har laget en løsning som lett lar bruker velge hvilken konsert bruker skal på. Deretter får bruker presentert top 10 sanger av valgte artist, som bruker enkelt kan bla seg frem og tilbake til eller hoppe direkte til ønsket sang. Dersom bruker liker en sang spesielt godt kan hen legge den til i favoritter. Bruker kan også enkelt fjerne en sang fra favoritter. Trykker man på sangen får man opp lyricsen og kan begynne å forberede seg til konsert. Vi har en menybar som enkelt lar bruker navigere rundt på applikasjonen. Favoritter samles på ett sted slik at bruker får sitt eget customized UKA-album, og er klar for å kose seg på alle konserter!

## Valg

### 1. Funksjonelle krav

- Vi har valgt at _sang_ til en artist er vår ressurs. Vi har implementert knapper som lett lar brukeren bla seg frem og tilbake. Under sang-vinduet er en liste med de 10 mest populære sangene til valgte artist, slik at bruker kan hoppe til en spesifikk ressurs.

- Bruker gjør et valg på hvilken artist hen ønsker å få opp sanger fra. Dette påvirket da hvilket utvalg av sanger som blir presentert.

- Bruker kan legge til sanger i _Favoritter_ ved å trykke på hjertet som er plassert nederst til høyre i sangvinduet. Det blir også gitt skriftlig feedback på om sangen er lagt til. Motsatt for å fjerne en sang fra favoritter. Favorittene samles på en egen siden, og kan nås fra menybaren. Man kan også trykke på popup-vinduet som dukker opp når bruker legger til/fjerner en sang fra favoritter for å komme til oversikten.

- Siden har et responsivt design. Vi har brukt flexbox og tatt i bruk width: 100vh på div-containerne. I tillegg bruker vi "center" på innholdet slik at innholdet forblir sentrert selv når skjermen minskes/forstørres.

- Siden løsningen referer til UKA23 har vi valgt å kjøre en lignende grafisk profil som de har på sin hjemmeside for å stå i stil til hverandre.

### 2. Tekniske valg

- Bruker typescript og React

- React state og props

  - Alt av sanger, indexer og hva som skal oppdatere storage lagres i states for å gjøre appen dynamisk.
  - Props er brukt for å sende data fra en komponent til en annen, f.eks. Favourites sender FavouriteCard med et sangnavn og ArtistSongs sender med artistID til ArtistCard.

- Vi har tatt i bruk Spotify sitt API

  - Her hentes først en accessToken fra Spotify før man får tilgang på å hente ut en spesifikk artist sine topp 10 sanger. Her får man også masse tillegg som URL til album-coveret som brukes, og URL til Spotify sin profil av sangen (hvor man finner lyrics på de fleste sanger).
  - TanStack Query hjelper oss å enkelt holde styr på API-kallene, ved å automatisk cache resultatene fra kallen og håndtere feil og loading-tilstander.

- Bruker HTML Web storage api (både localstorage og sessionstorage)

  - Favoritter lagres til localstorage slik at det lagres lokalt hvilke favorittsanger brukeren har
  - Sessionstorage brukes til å midlertidig lagre hvilken sang brukeren er på når hen blar mellom sanger. Dette for å forhindre at man blir sendt tilbake på første sang når siden refreshes.

- Bruker React Router
  - I main.tsx filen er React Router satt opp slik at man har forskjellige URL-paths til komponentene.

### 3. Utvikling og testing

- Vi har brukt issues og issue board på gitlab for å holde oversikt over utviklingsoppgavene. Vi har organisert issuene i labels _todo_, _doing_, _readyForTesting_ and _done_. Slik har vi lett holdt oversikt over hvilke utviklingsoppgaver som må gjøres, hvilke som er under utvikling og hvilke som er klare for å testes. I tilegg har vi gitt oppgaver knyttet til design en egen label: _style_. Hver issue har også vært koblet til en milestone (denne gangen prosjekt 1). Slik har vikontinuerligholdt oversikt over hvor mye som gjenstår på prosjekt 1. I tilegg har vi opprettet merge request etter hver issue ble ferdig, og en annen på teamet har gått igjennom koden og kvalitetsikret den før den har blitt merget til main.

- Testing
  - Her har vi startet på en msw-test for å teste API-kallene, men ikke fått tid til å fullføre den.
  - Vi har laget en snapshot-test av hjemmesiden som kjører.
  - Vi har også startet på flere tester av routingen hvor man trykker på en knapp skal man bli sendt til en ny side, men disse kjører dessverre ikke. Med hjelp fra studass fikk vi fortsatt ikke til at testene rendered ulike komponenter, og fikk dessverre ikke tid til å løse dette.
