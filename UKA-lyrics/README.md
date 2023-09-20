# Dokumentasjon

##  UKA-lyrics
### Tema for prosjektet
- Det nærmer seg UKA23 og studentene trenger å øve på sangtekstene til artistene som kommer til Trondheim. Vi har laget en løsning som lett lar bruker velge hvilken konsert bruker skal på. Deretter får bruker presentert top 10 sanger av valgte artist, som bruker enkelt kan bla seg frem og tilbake til eller hoppe direkte til ønsket sang. Dersom bruker liker en sang spesielt godt kan hen legge den til i favoritter. Bruker kan også enkelt fjerne en sang fra favoritter. Trykker man på sangen får man opp lyricsen og kan begynne å forberede seg til konsert. Vi har en menybar som enkelt lar bruker navigere rundt på applikasjonen. Favoritter samles på ett sted slik at bruker får sitt eget customized UKA-album, og er klar for å kose seg på alle konserter!

## Valg

### 1. Funksjonelle krav
- Vi har valgt at _sang_ til en artist er vår ressurs. Vi har implementert knapper som lett lar brukeren bla seg frem og tilbake. Under sang-vinduet er en liste med de 10 mest populære sangene til valgte artist, slik at bruker kan hoppe til en spesifikk ressurs.

 - Bruker gjør et valg på hvilken artist hen ønsker å få opp sanger fra. Dette påvirket da hvilket utvalg av sanger som blir presentert.

 - Bruker kan legge til sanger i _Favoritter_ ved å trykke på hjertet som er plassert nederst til høyre i sangvinduet. Det blir også gitt skriftlig feedback på om sangen er lagt til. Motsatt for å fjerne en sang fra favoritter. Favorittene samles på en egen siden, og kan nås fra menybaren. Man kan også trykke på popup-vinduet som dukker opp når bruker legger til/fjerner en sang fra favoritter for å komme til oversikten.

 - Siden har et responsivt design. Vi har tatt i bruk width: 100vh på ulike div-klasser. I tilegg bruker vi "center" på innholdet slik at innholdet forblir sentrert selv når skjermen minskes/forstørres.

 - Siden løsningen referer til UKA23 har vi valgt å kjøre en lignende grafisk profil som de har på sin hjemmeside for å stå i stil til hverandre.

### 2. Tekniske valg
- Bruker typescript og react 

- React state og props #TODO

- Vi har tatt i bruk Spotify sitt API #TODO

- Bruker HTML Web storage api (både localstorage og sessionstorage) #TODO

- Bruker React Router #TODO

### 3. Utvikling og testing
- Vi har brukt issues og issue board på gitlab for å holde oversikt over utviklingsoppgavene. Vi har organisert issuene i labels _todo_, _doing_, _readyForTesting_ and _done_. Slik har vi lett holdt oversikt over hvilke utviklingsoppgaver som må gjøres, hvilke som er under utvikling og hvilke som er klare for å testes. I tilegg har vi gitt oppgaver knyttet til design en egen label: _style_. Hver issue har også vært koblet til en milestone (denne gangen prosjekt 1). Slik har vikontinuerligholdt oversikt over hvor mye som gjenstår på prosjekt 1. I tilegg har vi opprettet merge request etter hver issue ble ferdig, og en annen på teamet har gått igjennom koden og kvalitetsikret den før den har blitt merget til main. 

- Testing #TODO