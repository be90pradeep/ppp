function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  
var countries = ["Indore , Madhya Pradesh",  "Bhopal , Madhya Pradesh", "Agra Indore","Ajnod	Indore","Alwasa	Indore","Ambachandan	Indore","Army Head Quarter	Indore","Attahada	Indore","Atwada	Indore","Aurangpura	Indore","Bachhoda	Indore","Badgonda	Indore","Badodia Khan	Indore","Bai	Indore","Baloda Tkun	Indore","Banadia	Indore","Baoliakhurd	Indore","Barlai Jagir	Indore","Betma	Indore","Bhagana	Indore","Bhagirath Pura	Indore","Bhagora	Indore","Bhatkhedi	Indore","Bhilbadoli	Indore","Bicholi Mardana	Indore","Bijasan Road	Indore","Binawda	Indore","Burankhedi	Indore","Chadoda	Indore","Chambal	Indore","Chhota Bangarda	Indore","Chittoda	Indore","Choral	Indore","Chordia	Indore","Dakachia	Indore","Datoda	Indore","Depalpur	Indore","Dhannad	Indore","Dharnaka	Indore","Dudhia	Indore","Farkodha	Indore","FC Ganj	Indore","Gandhinagar	Indore","Gautampura	Indore","Gawlipalasia	Indore","Girota	Indore","Gokulpur	Indore","Gujarkheda	Indore","Guran	Indore","Gurunanak Chauk	Indore","Harsola	Indore","Hasalpur	Indore","Hatod	Indore","IIM CAMPUS RAO	Indore","Indore Cat	Indore","Indore CGO Complex	Indore","Indore City-2	Indore","Indore Cloth Market	Indore","Indore Collectorate	Indore","Indore Courts	Indore","Indore DDU Nagar	Indore","Indore G.P.O.	Indore","Indore Industrial Area	Indore","Indore Kanadia Road	Indore","Indore Khajrana	Indore","Indore Kumar Khadi	Indore","Indore Malwa Mill	Indore","Indore Manorama Ganj	Indore","Indore Nagar	Indore","Indore Pardesipura	Indore","Indore R.S.S.Nagar	Indore","Indore Raj Mohalla	Indore","Indore Ram Bagh	Indore","Indore Siyaganj	Indore","Indore Takshashila	Indore","Indore Tillaknagar	Indore","Indore Tukoganj	Indore","Indore Uchchanyayalay	Indore","Industrial Estate	Indore","Jalodiyagyan	Indore","Jamburdi Sarwar	Indore","Jamburdihapsi	Indore","Jamli	Indore","Jhalaria	Indore","Jindakheda	Indore","Joshiguradia	Indore","Juni Indore	Indore","Kachalia	Indore","Kadwali Bujurg	Indore","Kalaria	Indore","Kallibillod	Indore","Kalmer	Indore","Kamadpur	Indore","Kampel	Indore","Kanadia	Indore","Kankariapal	Indore","Kanwasa	Indore","Karadia	Indore","Kasturbagram	Indore","Kelod	Indore","Kelodkartal	Indore","Khatiwala Tank	Indore","Khedi Sihod	Indore","Khudel	Indore","Khurdi	Indore","Kishanganj	Indore","Kodria	Indore","Kudana	Indore","Lasudia	Indore","Limbiodapar	Indore","Lokmanya Nagar Indore	Indore","Machal	Indore","Machla	Indore","Maithwada	Indore","Manglia	Indore","Manpur	Indore","Men	Indore","Mendakwasa	Indore","Mhow Cantt	Indore","Mhow Gaon	Indore","Mhow Railway Stattion	Indore","Mhow	Indore","Murkheda	Indore","Nanda Nagar	Indore","Neori	Indore","Pagnispaga Indore	Indore","Palakhedi	Indore","Palda	Indore","Paliya	Indore","Panod	Indore","Paphund	Indore","Pedmi	Indore","Pigdamber	Indore","Pipalda	Indore","Piwdai	Indore","Radio Colony Indore	Indore","Rajendra Nagar	Indore","Rajoda	Indore","Rangwasa	Indore","Rangwasa	Indore","Rao	Indore","Rasalpura	Indore","Rolai	Indore","Sagdod	Indore","Sanawadia	Indore","Sanwer Link Road Indore	Indore","Sanwer	Indore","Semlia Chau	Indore","Shri Aurobindo	Indore","Simrol	Indore","Sivani	Indore","Solsinda	Indore","Sonway Bhensolay Audygik Kshet	Indore","Sudama Nagar	Indore","Sumtha	Indore","Tihi	Indore","Tillorbujurg	Indore","Tillorkhurd	Indore","Todi	Indore","Umaria	Indore","Vallabhnagar	Indore","Vijay Nagar	Indore","Yashwant Nagar	Indore",
"Aajdawada	Indore","Aajmabad	Indore","Akasoda	Indore","Akya Jagir	Indore","Alot Jagir	Indore","Amla	Indore","Amodiya	Indore","Asawata	Indore","Aslavada	Indore","Badagaon	Indore","Badagaon	Indore","Badkummed	Indore","Baghera	Indore","Baledi	Indore","Baloda Lakkha	Indore","Bamnapati	Indore","Banbana	Indore","Bangred	Indore","Bappiya	Indore","Barkheda Buzurg	Indore","Barkheda Pitramal	Indore","Barkheda Madan	Indore","Barnagar Bunglow	Indore","Barnagar	Indore","Barnagar Town	Indore","Batlawdi	Indore","Bedavan	Indore","Berchha	Indore","BERCHHI	Indore","Bhainsoda	Indore","Bhatisuda	Indore","Bhatkhedi	Indore","Bhatpachlana	Indore","Bhikampur	Indore","Bichrod	Indore","Birakhedi	Indore","Birlagram Nagda	Indore","Bolasa	Indore","Buranabad	Indore","Chadawad	Indore","Chandesara	Indore","Chapakhedi	Indore","Chapaner	Indore","Chikli	Indore","Chintaman Jawasia	Indore","Chirola Chhota	Indore","Chirola	Indore","Chitavad	Indore","Dangwada	Indore","Delchi Buzurg	Indore","Dhabla Hardu	Indore","Dharakheda	Indore","Dungarkheda	Indore","Durgapura	Indore","Etawa	Indore","Ghattia	Indore","Ghinoda	Indore","Ghonsla	Indore","Ghudawan	Indore","Gogakheda	Indore","Goyalabujurg	Indore","Harnawada	Indore","Harsodhan	Indore","Hatai	Indore","Indokh	Indore","Ingoria	Indore","Jagoti	Indore","Jahagirpur	Indore","Jalodia	Indore","Jalwa	Indore","Jawasia Kumar	Indore","Jethal	Indore","Jharda	Indore","Jhitarkhedi	Indore","Jhutawad	Indore","Kachnariya	Indore","Kachria	Indore","Kadoudiya	Indore","Kagdikaradia	Indore","Kaliadeh	Indore","Kaluheda	Indore","Kamthana	Indore","Kanardi	Indore","Kanasia	Indore","Kanwas	Indore","Kapeli	Indore","KARANJ	Indore","Karedimataji	Indore","Karohan	Indore","KATHBAROD	Indore","Kaytha	Indore","Kesaria	Indore","Keson	Indore","Khachraud Rs	Indore","Khachraud	Indore","KHAJURIYA	Indore","Khandoda	Indore","Kharsod Khurd	Indore","Kharsodkalan	Indore","Khedakhajuria	Indore","Khedavada	Indore","Kundikheda	Indore","Lalgarh	Indore","Lekoda Anjana	Indore","Lekoda	Indore","Lohana	Indore","Lotiyajunarda	Indore","Madawda	Indore","Mahu	Indore","Mahudi	Indore","Makdavan	Indore","Makdone	Indore","Makla	Indore","Malikhedi	Indore","Matana Kalan	Indore","Mehatvas	Indore","Mehidpur Road	Indore","Mehidpur	Indore","Molana	Indore","Nagda Town	Indore","Nagda	Indore","Nainawad	Indore","Nalva	Indore","Nanded	Indore","Nandiyasi	Indore","Narsingarh	Indore","Narwar	Indore","Nauganwa	Indore","Navakheda	Indore","Nazarpur	Indore","Nimboda	Indore","NINORA	Indore","Nogaova	Indore","Pachlasi	Indore","Palduna	Indore","Palsoda Makdavan	Indore","Panbihar	Indore","Panthpiplai	Indore","Parsoli	Indore","Paslod	Indore","Pat	Indore","Peerjhalar	Indore","Pipliahama	Indore","Piploda Baghla	Indore","Piploda Dwarkadhish	Indore","Piplu	Indore","Ratadia	Indore","Rnayarapeer	Indore","Rohil Khurd	Indore","Rooi	Indore","Roopakhedi	Indore","Run Kheda	Indore","Runija	Indore","Rupeta	Indore","Sagwali	Indore","Samgi	Indore","Sandla	Indore","Semliya	Indore","Shakkar Khedi	Indore","Shrivatsa	Indore","Sijavta	Indore","Sodang	Indore","Sumrakheda	Indore","Sundarabad	Indore","SURASA	Indore","Suwasa	Indore","Tajpur	Indore","Takwasa	Indore","Talod	Indore","Tarana	Indore","Tilawad	Indore","Tulaheda	Indore","Tutiya Khedi	Indore","Ujjain Bherugarh	Indore","Ujjain City	Indore","Ujjain Danigate	Indore","Ujjain Factory	Indore","Ujjain Govt. Engg. College	Indore","Ujjain Gujrati Samaj	Indore","Ujjain Kothi	Indore","Ujjain M.L.Nagar	Indore","Ujjain Madhonagar	Indore","Ujjain Rishi Nagar	Indore","Ujjain Shri Mahakal	Indore","Ujjain Daulatganj	Indore","Ujjain	Indore","UJJAIN NAYAPURA	Indore","UJJAIN RAMGHATMARG	Indore","Ujjain Vikram University	Indore","Ujjainiya	Indore","Undasa	Indore","Unhel	Indore",
"Aajdawada	Ujjain","Aajmabad	Ujjain","Akasoda	Ujjain","Akya Jagir	Ujjain","Alot Jagir	Ujjain","Amla	Ujjain","Amodiya	Ujjain","Asawata	Ujjain","Aslavada	Ujjain","Badagaon	Ujjain","Badagaon	Ujjain","Badkummed	Ujjain","Baghera	Ujjain","Baledi	Ujjain","Baloda Lakkha	Ujjain","Bamnapati	Ujjain","Banbana	Ujjain","Bangred	Ujjain","Bappiya	Ujjain","Barkheda Buzurg	Ujjain","Barkheda Pitramal	Ujjain","Barkheda Madan	Ujjain","Barnagar Bunglow	Ujjain","Barnagar	Ujjain","Barnagar Town	Ujjain","Batlawdi	Ujjain","Bedavan	Ujjain","Berchha	Ujjain","BERCHHI	Ujjain","Bhainsoda	Ujjain","Bhatisuda	Ujjain","Bhatkhedi	Ujjain","Bhatpachlana	Ujjain","Bhikampur	Ujjain","Bichrod	Ujjain","Birakhedi	Ujjain","Birlagram Nagda	Ujjain","Bolasa	Ujjain","Buranabad	Ujjain","Chadawad	Ujjain","Chandesara	Ujjain","Chapakhedi	Ujjain","Chapaner	Ujjain","Chikli	Ujjain","Chintaman Jawasia	Ujjain","Chirola Chhota	Ujjain","Chirola	Ujjain","Chitavad	Ujjain","Dangwada	Ujjain","Delchi Buzurg	Ujjain","Dhabla Hardu	Ujjain","Dharakheda	Ujjain","Dungarkheda	Ujjain","Durgapura	Ujjain","Etawa	Ujjain","Ghattia	Ujjain","Ghinoda	Ujjain","Ghonsla	Ujjain","Ghudawan	Ujjain","Gogakheda	Ujjain","Goyalabujurg	Ujjain","Harnawada	Ujjain","Harsodhan	Ujjain","Hatai	Ujjain","Indokh	Ujjain","Ingoria	Ujjain","Jagoti	Ujjain","Jahagirpur	Ujjain","Jalodia	Ujjain","Jalwa	Ujjain","Jawasia Kumar	Ujjain","Jethal	Ujjain","Jharda	Ujjain","Jhitarkhedi	Ujjain","Jhutawad	Ujjain","Kachnariya	Ujjain","Kachria	Ujjain","Kadoudiya	Ujjain","Kagdikaradia	Ujjain","Kaliadeh	Ujjain","Kaluheda	Ujjain","Kamthana	Ujjain","Kanardi	Ujjain","Kanasia	Ujjain","Kanwas	Ujjain","Kapeli	Ujjain","KARANJ	Ujjain","Karedimataji	Ujjain","Karohan	Ujjain","KATHBAROD	Ujjain","Kaytha	Ujjain","Kesaria	Ujjain","Keson	Ujjain","Khachraud Rs	Ujjain","Khachraud	Ujjain","KHAJURIYA	Ujjain","Khandoda	Ujjain","Kharsod Khurd	Ujjain","Kharsodkalan	Ujjain","Khedakhajuria	Ujjain","Khedavada	Ujjain","Kundikheda	Ujjain","Lalgarh	Ujjain","Lekoda Anjana	Ujjain","Lekoda	Ujjain","Lohana	Ujjain","Lotiyajunarda	Ujjain","Madawda	Ujjain","Mahu	Ujjain","Mahudi	Ujjain","Makdavan	Ujjain","Makdone	Ujjain","Makla	Ujjain","Malikhedi	Ujjain","Matana Kalan	Ujjain","Mehatvas	Ujjain","Mehidpur Road	Ujjain","Mehidpur	Ujjain","Molana	Ujjain","Nagda Town	Ujjain","Nagda	Ujjain","Nainawad	Ujjain","Nalva	Ujjain","Nanded	Ujjain","Nandiyasi	Ujjain","Narsingarh	Ujjain","Narwar	Ujjain","Nauganwa	Ujjain","Navakheda	Ujjain","Nazarpur	Ujjain","Nimboda	Ujjain","NINORA	Ujjain","Nogaova	Ujjain","Pachlasi	Ujjain","Palduna	Ujjain","Palsoda Makdavan	Ujjain","Panbihar	Ujjain","Panthpiplai	Ujjain","Parsoli	Ujjain","Paslod	Ujjain","Pat	Ujjain","Peerjhalar	Ujjain","Pipliahama	Ujjain","Piploda Baghla	Ujjain","Piploda Dwarkadhish	Ujjain","Piplu	Ujjain","Ratadia	Ujjain","Rnayarapeer	Ujjain","Rohil Khurd	Ujjain","Rooi	Ujjain","Roopakhedi	Ujjain","Run Kheda	Ujjain","Runija	Ujjain","Rupeta	Ujjain","Sagwali	Ujjain","Samgi	Ujjain","Sandla	Ujjain","Semliya	Ujjain","Shakkar Khedi	Ujjain","Shrivatsa	Ujjain","Sijavta	Ujjain","Sodang	Ujjain","Sumrakheda	Ujjain","Sundarabad	Ujjain","SURASA	Ujjain","Suwasa	Ujjain","Tajpur	Ujjain","Takwasa	Ujjain","Talod	Ujjain","Tarana	Ujjain","Tilawad	Ujjain","Tulaheda	Ujjain","Tutiya Khedi	Ujjain","Ujjain Bherugarh	Ujjain","Ujjain City	Ujjain","Ujjain Danigate	Ujjain","Ujjain Factory	Ujjain","Ujjain Govt. Engg. College	Ujjain","Ujjain Gujrati Samaj	Ujjain","Ujjain Kothi	Ujjain","Ujjain M.L.Nagar	Ujjain","Ujjain Madhonagar	Ujjain","Ujjain Rishi Nagar	Ujjain","Ujjain Shri Mahakal	Ujjain","Ujjain Daulatganj	Ujjain","Ujjain	Ujjain","UJJAIN NAYAPURA	Ujjain","UJJAIN RAMGHATMARG	Ujjain","Ujjain Vikram University	Ujjain","Ujjainiya	Ujjain","Undasa	Ujjain","Unhel	Ujjain",
"Agrod B.O	Dewas","Agrod	Dewas","Agurli	Dewas","Ajnas	Dewas","Alri B.O	Dewas","Amla	Dewas","Amlataj	Dewas","Amona	Dewas","Anabad	Dewas","Anwalia Piplia	Dewas","Arlaoda	Dewas","Atwas	Dewas","Babai	Dewas","Bagankheda	Dewas","Bagli	Dewas","Bahirawad	Dewas","Baijagwada	Dewas","Bairagarh B.O	Dewas","Balgarh	Dewas","Balon	Dewas","Bamnikhurd	Dewas","Bangar B.O	Dewas","Bangarda B.O	Dewas","Baodi Kheda	Dewas","Barkheda Purvaiya	Dewas","Barkhedasoma	Dewas","Barotha B.O	Dewas","Bedgaon	Dewas","Bhamori	Dewas","Bhandaria	Dewas","Bhesun	Dewas","Bhonrasa	Dewas","Bhutiyabujurg	Dewas","Bijalgaon	Dewas","Bijwad	Dewas","Bilawli B.O	Dewas","Binjana B.O	Dewas","Bisakhedi	Dewas","Burada	Dewas","Chandpura	Dewas","Chandrashekhar Dam	Dewas","Chandwana	Dewas","Chapda	Dewas","Chaubapipliya	Dewas","Chaubara Jagir	Dewas","Chichli Rajor	Dewas","Chidawad B.O	Dewas","Chobaradhira	Dewas","Churlai Badi	Dewas","Dangarkheda	Dewas","Dattotar Mandi B.O	Dewas","Daulatpur	Dewas","Deepgaon	Dewas","Dehri Sahu	Dewas","Deogarh	Dewas","Deoguradia	Dewas","Dewas Bada Bazar	Dewas","Dewas Bank Note Press	Dewas","Dewas Bhavanisagar	Dewas","Dewas	Dewas","Dewas Industrial Estate	Dewas","Dewas Radhaganj	Dewas","Dewas Vijayganjmandi B.O	Dewas","Dokakui	Dewas","Double Chowki	Dewas","Eklera	Dewas","Eklera Mataji	Dewas","Gandharvpuri	Dewas","Ganora	Dewas","Garhkhajuria	Dewas","Ghasad	Dewas","Godhna	Dewas","Gorba	Dewas","Guradiakalan	Dewas","Harangaon	Dewas","Harnoada	Dewas","Hatpipliya	Dewas","Jamgod	Dewas","Jamoniya	Dewas","Jinwani	Dewas","Jiyagaon	Dewas","Jiyagarh	Dewas","Kalma B.O	Dewas","Kalwar	Dewas","Kamlapur	Dewas","Kankakhajuriya	Dewas","Kankariya	Dewas","Kannod	Dewas","Kantaphod	Dewas","Karnawad	Dewas","Katkut	Dewas","Kelod B.O	Dewas","Khajuriabina	Dewas","Khal	Dewas","Khareli B.O	Dewas","Khategaon	Dewas","Kheriajagir	Dewas","Khiroda	Dewas","Khokriya	Dewas","Khutkheda	Dewas","Kolari	Dewas","Kshipra B.O	Dewas","Kusmania	Dewas","Lasudiya Brahaman	Dewas","Lasudiya Kulmi	Dewas","Limboda	Dewas","Loharda	Dewas","Mankund	Dewas","Matmautr	Dewas","Maukheda	Dewas","Mohai	Dewas","Mundheda B.O	Dewas","Mundladangi	Dewas","Murjhal	Dewas","Nagda	Dewas","Nanasa	Dewas","Nandal	Dewas","Nanukheda	Dewas","Nemawar	Dewas","Neori	Dewas","Nipania B.O	Dewas","Nipaniya Hurhur	Dewas","Omkara	Dewas","Padliya B.O	Dewas","Pandajagir	Dewas","Pandutalab	Dewas","Panigaon	Dewas","Pankua	Dewas","Patadi	Dewas","Patlawada B.O	Dewas","Patrani	Dewas","Pipalkota	Dewas","Pipalrawa	Dewas","Piplani	Dewas","Piplianankar	Dewas","Pipri	Dewas","Polai	Dewas","Punjapura	Dewas","Raghogarh	Dewas","Rajoda B.O	Dewas","Ranayal Kalan	Dewas","Randankhedi B.O	Dewas","Ratanpur	Dewas","Richi	Dewas","Sadikheda	Dewas","Salamkhedi B.O	Dewas","Sandalpur	Dewas","Sannod	Dewas","Sanwarsi	Dewas","Satwas	Dewas","Sawasada	Dewas","Singawada B.O	Dewas","Siroliya B.O	Dewas","Siya B.O	Dewas","Sonkhedi	Dewas","Sonkutch	Dewas","Sukardi	Dewas","Sulgaon	Dewas","Sundrel	Dewas","Sunwanigopal B.O	Dewas","Surmania	Dewas","Talod	Dewas","Tappa Suklia	Dewas","Thuria	Dewas","Tigira Chota	Dewas","Tigiria Goga	Dewas","Tiwdiya	Dewas","Tonkhurd	Dewas","Tonkkalan B.O	Dewas","Udaynagar	Dewas","Umaria	Dewas","Vikrampur	Dewas","Zikrakheda	Dewas",
"1100 Qrts.	Bhopal","3 EME Centre	Bhopal","AIIMS	Bhopal","Air Port	Bhopal","Amarawat Kalan	Bhopal","Anand Nagar	Bhopal","Arera Hills	Bhopal","Arwaliya	Bhopal","Ayodhaya Nagar	Bhopal","Bag Mungalia	Bhopal","Bagroda	Bhopal","Bairagarh Chichali	Bhopal","Bairagarh Kalan	Bhopal","Bairagarh	Bhopal","Balachoan	Bhopal","Balampur	Bhopal","Bangrasia	Bhopal","Barkheda	Bhopal","Barkheda Baramad	Bhopal","Barkheda H.E.	Bhopal","Barkheda Nathu	Bhopal","Barkhedi	Bhopal","Basai	Bhopal","Bawachiya	Bhopal","Bawadia Kalan	Bhopal","Bazaria Shahajahanabad	Bhopal","Berasia Bhopal	Bhopal","Berasia Road	Bhopal","Bhel	Bhopal","Bhonri	Bhopal","Bhopal G.P.O.	Bhopal","Bilakho	Bhopal","Bishankhedi	Bhopal","C.T.T.Nagar	Bhopal","Chandbad	Bhopal","Chhola Road	Bhopal","Chouk	Bhopal","Dhamarra	Bhopal","Dhaturiya	Bhopal","Dillod	Bhopal","Dungariya	Bhopal","E-2 Sector	Bhopal","Fanda	Bhopal","Gada Jangeer	Bhopal","Gandhi Medical College	Bhopal","Gandhi Nagar	Bhopal","Govindpura	Bhopal","Gunga	Bhopal","H.E. Hospital	Bhopal","Hamidia Road	Bhopal","Harra Kheda	Bhopal","IISER Bhouri	Bhopal","Imaliya	Bhopal","Industrial Estate	Bhopal","Islam Nagar	Bhopal","Itwara	Bhopal","Jahangirabad	Bhopal","Jamunia Kalan B.O	Bhopal","Jamusarkalan	Bhopal","Jhagaria Khurd	Bhopal","Jumerati	Bhopal","Kalara	Bhopal","Kamla Nagar	Bhopal","Khajuri Kalan B.O	Bhopal","Khajuri Sadak	Bhopal","Khamkheda	Bhopal","Khitwas	Bhopal","Khukharia	Bhopal","Kokata B.O	Bhopal","Kolar Road	Bhopal","Kolua Khurd B.O	Bhopal","Kolukhedi	Bhopal","Kotra Chopra	Bhopal","Kulhoar	Bhopal","Kurana	Bhopal","Kutakipura	Bhopal","Kuthar	Bhopal","Lalariya	Bhopal","Laloi	Bhopal","M.A.C.T.	Bhopal","M.L. Nagar	Bhopal","M.L.A.Rest House	Bhopal","M.P. Vidhan Sabha	Bhopal","Mahaveer Nagar	Bhopal","Mandideep	Bhopal","Mangal Garh	Bhopal","Meghra Kalan	Bhopal","Misord	Bhopal","Misrod	Bhopal","MP Bhoj Open University	Bhopal","Mungalia Chhap	Bhopal","Mungaliya Hatt	Bhopal","Nabibagh	Bhopal","Naya Samund	Bhopal","Nayapura	Bhopal","Nazirabad	Bhopal","Nishatpura	Bhopal","Obedullaganj	Bhopal","Old Secretriate	Bhopal","Parwaliya Sadak	Bhopal","Peoples Campus	Bhopal","Pipal Khedi	Bhopal","Pipaliya Jaheerpeer	Bhopal","Polaha	Bhopal","R.S.Market	Bhopal","R.S.Nagar	Bhopal","Raipur	Bhopal","Raj Bhawan	Bhopal","Ratibad	Bhopal","Ratua Ratanpur	Bhopal","Regional College	Bhopal","RGPV	Bhopal","Runaha	Bhopal","S.I. Line	Bhopal","Satalapur	Bhopal","Satpura	Bhopal","Sewaniya Gond	Bhopal","Shahajahanabad	Bhopal","Shastri Nagar	Bhopal","Shiksha Mandal	Bhopal","Shivaji Nagar	Bhopal","Sikandri Sarai	Bhopal","Sindhora	Bhopal","Sohaya	Bhopal","Sonkachh	Bhopal","Subhash Nagar	Bhopal","Sukaliya	Bhopal","Sukhi Sewania	Bhopal","Suraj Nagar	Bhopal","Tara Sewaniya	Bhopal","Tarawali Kalan	Bhopal","Tila Khedi	Bhopal","Trilanga	Bhopal","Tulsi Nagar	Bhopal","Tumada	Bhopal","University	Bhopal","Vallabh Bhawan	Bhopal","Vidya Vihar	Bhopal"



 
]






  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), countries);
  