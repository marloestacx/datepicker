# NS Datepicker

Een NS reisplanner speciaal voor Marijn.

![reisplanner1](https://user-images.githubusercontent.com/24413936/168117429-765146b7-f2b4-4862-aff8-f1f7e655d1b0.png)

![reisplanner5](https://user-images.githubusercontent.com/24413936/169030846-761f7a77-0fe2-4ff2-9860-ae5c60f8ab92.png)

![reisplanner3](https://user-images.githubusercontent.com/24413936/168117413-cbb4f53b-86bd-4789-8a42-5fe3ef83eaa8.png)

![reisplanner4](https://user-images.githubusercontent.com/24413936/168117380-3be7908e-08cf-44f9-8f71-9b1edbaa6287.png)

## User Needs

Het project is gemaakt voor Marijn. Marijn reist voor zijn werk van Eindhoven naar Amsterdam en moet zich hiervoor altijd aanmelden omdat hij in een rolstoel zit. Dit aanmelden moet maximaal een uur van tevoren.

Door zijn motorische stoornis gebruikt hij de computer anders dan mensen zonder een motorische stoornis. Hij maakt veel gebruik van de H J K en L toetsen om te navigeren. Hij vindt de huidige datepicker bij de NS priegelig en wilt hier een verbeterde versie van die makkelijker voor hem te gebruiken is.

Marijn zei dat hij weinig tijd heeft voor hobby's, maar wel houdt van bier, lezen een bandjes zien.

## Design Principles

### Study Situation

Het is belangrijk om de situatie te bestuderen. Als je weet wat je test persoon kan weet je ook hoe je de website voor hem kan bouwen.

Mijn eerste aannamen was eigenlijk dat hij de tab toets zou gebruiken, dit bleek bij de eerste test niet zo te zijn. Doordat hij gebruikt maakt van de HJKL toetsen moet je dit dus ook zo bouwen voor hem. Ik had ook niet verwacht dat hij zijn muis zou kunnen gebruiken maar dat kan hij dus wel. 

### Ignore Conventions

De inclusieve principes zeggen dat we conventies moeten gebruiken die iedereen herkent. Maar deze conventies werken niet altijd voor alle mensen. Deze conventies werken vaak niet voor mensen die geen ontwerper zijn en mensen met een handicap daarom is het soms goed om deze te negeren.

Marijn gebruikt bijvoorbeeld de tab toets niet, iets wat wordt geleerd dat mensen die geen muis gebruiken juist wel doen. Hierdoor heb ik dit vervangen en hij met de H toets omhoog kan en de J toets omlaag. Daarnaast heb ik het zo gemaakt dat Marijn niet zelf de stations hoeft in te typen, ik zag dat hij dit wel kan maar erg langzaam ging. Hierdoor heb ik voor een dropdown list gekozen zodat hij sneller een station kan selecteren. Bij de tijd kan je alleen in stappen van 15 minuten selecteren, hierdoor kan hij sneller een tijd kiezen zonder dat hij door alle minuten hoeft te gaan. De tijd staat ook een uur later dan de huidige tijd omdat hij maximaal een uur van tevoren de trein moet reserveren. 

### Prioritise Identity

Dat je weet hoe iemand met een beperking met de website omgaat is niet genoeg, het is handig om de persoon ook te leren kennen. Het is goed als je iets voor iemand ontwerpt, maar nog beter als je het met hem maakt. 

Door de testen kreeg je te zien precies wat wel en niet werkt voor Martijn waardoor je de website voor hem kon maken. Omdat Martijn meestal naar zijn werk reist, is er een aparte pagina voor zijn werk. Hiermee kan hij snel een reis naar zijn werk plannen zonder door alle stations te hoeven zoeken, hij kiest zijn begin station en het einstation is automatisch het andere station. Er is ook een pagina voor als hij een dagje uit gaat, hier kan hij kiezen uit de grootste stations. Hier wordt opgeslagen wat zijn laatste eind station was en wordt de volgende keer automatisch als begin station geselecteerd.

### Add Nonsense

Door het toevoegen van onzin kan je het toegankelijke ontwerp meer maken dan alleen een functionele website. Hierdoor kom je vaak op interessante en leuke ideeën voor een project.

Op de eindpagina als je je reis gepland heb krijg je een random gifje van een trein te zien, dit voegt qua functionaliteit niks toe maar is toch altijd een leuke verrassing aan het einde. Vanaf de homepagina kan je kiezen om een lijst van aanbevolen boeken te zien, dit is een lisjt van de top 15 boeken van de New York Times bestsellerlijst. Als je op een van de boeken klikt ga je automatisch naar de Amazon pagina zodat je het boek meteen kan kopen. 

## Testen

### Eerste test

<img src="https://user-images.githubusercontent.com/24413936/168117695-1b3218dc-b119-4ded-b84c-c2b903d56fff.png" alt="test1" width="600"/>

##### Bevindingen

- Marijn maakt vooral gebruik van de hjkl toetsen
- Hij moet minimaal 1 uur van tevoren reserveren
- Als hij vertrekt vanuit Amsterdam de andere plek automatisch op Eindhoven
- Hij heeft geen tijd voor hobby's
- Dingen die hij wel leuk vindt zijn naar bandjes gaan, bier drinken en boeken lezen.
- Meestal reist hij van huis naar werk en andersom, maar 1 keer per maand gaat hij wel eens ergens
anders heen.

#### Aanpak

Ik ga mijn eerste prototype aanpassen, zo ga ik implementeren dat Marijn de hjkl toetsen kan gebruiken om te navigeren in plaats van de tab toets. Als hij Amsterdam selecteert wil ik dat het andere station automatisch naar Eindhoven veranderd. Ik wil toevoegen dat je de tijd alleen per 15 minuten kunt veranderen.

### Tweede test

<img src="https://user-images.githubusercontent.com/24413936/168117851-17778ba2-03e9-47c0-9ee6-844af5906107.png" alt="test2" width="600"/>

##### Bevindingen

- Marijn zou het handig vinden of hij kan zien welke dag van de week het is, in plaats van alleen een datum.
- Marijn wil graag dat de tijd standaard 1 uur later is.
- Het zou handig zijn als de grootte station bovenaan staan of stations die hij als laatste gekozen heeft.

#### Aanpak

Ik ga mijn prototype meer op Marijn richten, wat meer van zijn hobby's laten terug komen. Ik wil toevoegen dat je nog meerdere stations kunt kiezen want nu kan je alleen van je werk naar huis en andersom. Ik wil iets van nonsense toevoegen en de tijd wil ik automatisch op 1 uur later dan de huidige tijd hebben.

### Derde test

<img src="https://user-images.githubusercontent.com/24413936/168117422-6e7591ce-df9f-4bfb-a726-863fadf83246.png" alt="test3" width="600"/>

##### Bevindingen

Doordat ik de derde test met Martijn gemist had moest ik mijn mondeling als een derde test zien.

- Je hebt eigenlijk maar 1 input veld nodig bij werk 
- Bij een dagje weg zou je de laatste keuzen als vertrek plek kunnen zien

#### Aanpak

Ik ga de laatste bevindngen toepassen in mijn prototype. Zo ga ik bij het werk het aankomst station weghalen en bij het dagje weg toevoegen dat hij je laatste eindstation nu automtisch als vertrek station instelt. 

## Conclusie

Je kan met code heel snel een prototype maken een dit elke week verbeteren. Wel vond ik het de eerste week moeilijk wat ik moest doen omdat ik Marijn nog niet ontmoet had. Omdat het voor hem gemaakt wordt en niet precies wist wat hij kon was het moeilijk in te schatten of je dingen als en dropdown kon gebruiken.

Na de eerste ontmoeting bleek al dat Marijn meer kan dan ik dacht, zou kunnen, zo kan hij bijvoorbeeld zijn muis wel gebruiken. Als je bij een test iets was vergeten te vragen was het een beetje gokken of het zou werken, dan is dus de kans dat je iets maakt wat helemaal niet werkt. Door het zien van de test van andere klasgenoten kwam je vaak ook al tot nieuwe inzichten, want ook al had je het zelf nog niet in je website je wist wel of je iets wel of niet kon toepassen. 

Ik heb geleerd dat het belangrijk is om te weten dat niet iedereen een computer hetzelfde gebruikt en dat de standaard design principes niet op iedereen van toepassing zijn. Als je met je doel groep blijft testen kom je snel op nieuwe bevindingen die je website kunnen verbeteren. 

## Bronnen

* [Exclusive Design](https://exclusive-design.vasilis.nl)
* [GIPHY API](https://developers.giphy.com)
* [New York Times Books API](https://developer.nytimes.com/docs/books-product/1/overview)
