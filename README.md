# NS Datepicker

Een NS reisplanner speciaal voor Marijn.

![reisplanner1](https://user-images.githubusercontent.com/24413936/168117429-765146b7-f2b4-4862-aff8-f1f7e655d1b0.png)

![reisplanner2](https://user-images.githubusercontent.com/24413936/168117422-6e7591ce-df9f-4bfb-a726-863fadf83246.png)

![reisplanner3](https://user-images.githubusercontent.com/24413936/168117413-cbb4f53b-86bd-4789-8a42-5fe3ef83eaa8.png)

![reisplanner4](https://user-images.githubusercontent.com/24413936/168117380-3be7908e-08cf-44f9-8f71-9b1edbaa6287.png)

## User Needs

Het project is gemaakt voor Marijn. Marijn reist voor zijn werk van Eindhoven naar Amsterdam en moet zich hiervoor altijd aanmelden odmat hij in een roelstoel zit. Dit aanmelden moet maximaal een uur van te voren.

Door zijn motorische stoornis gebruikt hij de computer anders dan mensen zonder een motorische stoornis. Hij maakt veel gebruik van de H J K en L toetsen om te navigeren. Hij vind de huidige datepicker bij de NS priegelig en wilt hier een verbeterde versie van die makkelijker voor hem te gebruiken is.

Marijn zei dat hij weinig tijd heeft voor hobbies maar wel houdt van bier, lezen een bandjes zien.

## Design Principles

### Study situation

Het is belangrijk om de situatie te bestuderen. Als je weet wat je test persoon kan weet je ook hoe je de website kan bouwen.

Mijn eerste aannamen was eigenlijk dat hij de tab toets zou gebruiken, dit bleek bij de eerste test niet zo te zijn. Doordat hij gebruikt maakt van de HJKL toetsen moet je dit dus ook zo bouwen voor hem.

### Ignore Conventions

De inclusieve principe??? zegt dat we conventies moeten gebruiken die iedereen herkent. Maar deze conventies werken niet altijd voor alle mensen. Deze conventies werken vaak niet voor niet-ontwerpers en mensen met een handicap daarom is het soms goed om deze te negeren.

Marijn gebruikt bijvoorbeeld de tab toest niet, iets wat wordt geleerd dat mensen die geen muis gebruiken juist wel doen. Hierdoor heb ik dit vervangen en hij met de H toest omhoog kan en de J toets omlaag.

### Prioritise Identity

Het is goed als je iets voor iemand ontwerpt maar nog beter als je het met hem maakt.

Door de testen kreeg je te zien precies wat wel en niet werkt voor Martijn waardoor je de website voor hem kon maken. Omdat Martijn meestal naar zijn werk reist is er een aparte pagina voor zijn werk. Hiermee kan hij snel een reis naar zijn werk plannen zonder door alle stations te hoeven zoeken. Er is ook een pagina voor als hij een dagje uit gaat, hier kan hij kiezen uit de grooste stations. Als laatste hbe ik een boeken pagina toegevoegd, omdat Marijn van lezen houdt kan hij hier wat aanbevolen boeken vinden.

### Add nonsense

Door het toevoegen van onzin kan je het toegankelijke ontwerp meer maken dan alleen een functionele website. Hierdoor kom je vaak op interessante en leuke ideeën voor een project.

Op de eind pagina als je je reis gepland heb krijg je een random gifje van een trein te zien, dit voegt qua functionaliteit niks toe maar is toch altijd een leuke verassing aan het einde.

## Testen

### Eerste test

<img src="https://user-images.githubusercontent.com/24413936/168117695-1b3218dc-b119-4ded-b84c-c2b903d56fff.png" alt="drawing" width="600"/>

##### Bevindingen

Marijn maakt vooral gebruik van de hjkl toetsen
Hij moet minimaal 1 uur van te voren reserveren
Als hij vertrekt vanuit Amsterdam de andere plek automatisch op Eindhoven
Hij heeft geen tijd voor hobbies
Dingen die hij wel leuk vindt zijn naar bandjes gaan, bier drinken en boeken lezen.
Meestal reist hij van huis naar werk en andersom maar 1x per maand gaat hij wel eens ergens
anders heen.

#### Aanpak

Ik ga mijn eerste prototype aanpassen, zo ga ik implementeren dat Marijn de hjkl toetsen kan gebruiken om te navigeren inplaats van de tab toets. Als hij Amsterdam selecteert wil ik dat het andere station automatisch naar Eindhoven veranderd. Ik wil toevoegen dat je de tijd alleen per 15 minuten kunt veranderen.

#### Tweede test

<img src="https://user-images.githubusercontent.com/24413936/168117851-17778ba2-03e9-47c0-9ee6-844af5906107.png" alt="drawing" width="600"/>

##### Bevindingen

Weten welke dag van de week het is, vandaag of morgen etc

Pak huidige tijd +1 uur als default

Grote stations eerst of laatste gekozen

#### Aanpak

Ik ga mijn prototype meer op Marijn richten, wat meer van zijn hobbies laten terug komen. Ik wil toevoegen dat je nog meerdere stations kunt kiezen want nu kan je alleen van je werk naar huis en andersom. Ik wil iets van nonsense toeveogen en de tijd wil ik automatisch op 1 uur later dan de huidige tijd hebben.

## Conclusie

Je kan met code heel snel een prototype maken een dit elke week verbeteren. Wel vond ik het de eerste week moeilijk wat ik moest doen omdat ik Marijn nog niet ontmoet had. Omdat het voor hem gemaakt wordt en niet precies wist wat hij kon was het moeilijk in te schatten of je dingen als en dropdown kon gebruiken.

## Bronnen

[Exclusive Design](https://exclusive-design.vasilis.nl)
