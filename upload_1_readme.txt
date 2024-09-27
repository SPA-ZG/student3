https://skola-za-pse-1.onrender.com/ 
- treba neko vrijeme da se pokrene ako nije dugo pokretana

zip - u WEB2-lab6 direktoriju potrebno je pokrenuti npm install, zatim se
   treba pozicionirati u skola-za-pse i tamo pokrenuti npm install te nakon toga npm run dev ili npm run serve.
Ako nije prije instalirano, možda će trebati pokrenuti i npm install pinia.

1. interpolation/one-way binding - Da, src/views/Home.vue, :6, :7. Npr. {{ pageTitle }}
2. two-way binding - Da, src/views/Courses.vue, :19, checkbox komponenta dvosmjerno je povezana s showAdditionalCourses data property 
3. methods - Da, src/views/Contact.vue, :38, src/components/ButtonComponent.vue, :4, :20, definirane na više mjesta
	Npr. kod ButtonComponent poziva se metoda emitEvent na klik gumba.
4. computed properties - Da, src/views/Courses.vue, :111. Definiran coursesSummary u kojem se izračunava broj tečajeva s ${totalCourses}  
5. barem jedan scoped style - Da, src/views/Home.vue, :25, započinje sa <style scoped>
6. koristiti barem jedan lifecycle hook - Da, src/views/Courses.vue, :129, updated() koji reagira na klik checkboxa i poziva updateAdditionalCoursesSummary()  
7. routing (više stranica) - Da, src/router/index.js, :10, definiran router sa stranicama / (Home), Courses, Services, Contact i catchAll(*) koja preusmjerava na početnu
 	aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
 	dinamičko usmjeravanje s 404 stranicom ("catch all")
8. (barem) dvije komponente - Da
	komponenta bez stanja, koristiti properties - src/components/ServicesStateless.vue, :16, definiran props
	komponenta sa stanjem - Da, src/views/Courses.vue, :47, definiran data
9. barem jedna komponenta mora emitirati barem jedan event - Da, src/components/ButtonComponent.vue, :23, funkcija s this.$emit(this.eventName)
10. store (Pinia) - Da, src/store/store.js (cijeli), src/views/Contact.vue, :61, :65, Pinia se koristi za pamćenje korisnikovog maila. 
	Kad jednom pošalje upit, mail će ostati zapamćen i automatski se ispuniti u polju za mail
11. asinkroni dohvat podataka s backenda - Ne 

Nisu navedena sva mjesta gdje su implementirani zahtjevi. 
U kodu se nalaze komentari s tekstom zahtjeva poput <!-- interpolation/one-way binding -->
pa ih je lako pronaći npr. u VSCode s Ctrl+Shift+F.