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
  
var countries = ["React js Developer", "Angular js developer",
"Computer vision expert", "RoR developer","Java developer", "Python developer", 
"Node js developer","PHP developer", "Fresher", "Laravel developer", 
"Customer support executive","Telecalling","IOS developer","Android developer","Javacript developer",
"Anotation Expert","Computer support Executive","Back Office","Machinine Learning",
"CEO","CTO","CIO/Chief Digital Officer/Chief Innovation Officer","VP of Product Management/Head of Product","Product Manager","VP of Marketing","VP of Engineering/Director of Engineering","Chief Architect","Software Architect","Engineering Project Manager/Engineering Manager","Technical Lead/Engineering Lead/Team Lead","Principal Software Engineer","Senior Software Engineer/Senior Software Developer","Software Engineer","Software Developer","Junior Software Developer","Intern Software Developer",
"CTO","CIO/Chief Digital Officer/Chief Innovation Officer","VP of Product Management/Head of Product","Product Manager","VP of Marketing","VP of Engineering","Director of Engineering","Chief Architect","Software Architect","Engineering Project Manager","Engineering Manager","Technical Project Manager","Project Manager","Business Account Manager","Senior Manager IT","IT Infra Manager","Procurement manager","Learning and Development Manager","Learning and Development co-ordinators",
"HR Coordinator","Payroll Coordinator","Recruiting Coordinator","HR Specialist","HR Generalist","Recruiter","Human Resource Information Specialist","HR Manager","Recruiting Manager","HR Business Partner","HR Director","Recruiting Director","VP of HR","Chief Human Resource Officer","Career Consultant","Career Advisor","Assignment Coordinator","Placement Coordinator","Career Development Strategist","Personnel Agent","Human Resources Officer",
"SEO Manager","SEO Engineer","Digital Marketing Manager","Digital Marketing Analyst","Social Media Marketing Manager","Social Media Marketing Analyst","MARKETING TECHNOLOGIST","SEO CONSULTANT","WEB ANALYTICS DEVELOPER","DIGITAL MARKETING MANAGER","SOCIAL MEDIA MANAGER","GROWTH HACKER","CONTENT MANAGER","CONTENT STRATEGIST",
"Admin Big Data","Ansible Operations Engineer","Artifactory Administrator","Artificial intelligence / Machine Learning Engineer","Artificial Intelligence / Machine Learning Leader","Artificial Intelligence / Machine Learning Sr.Leader","Artificial intelligence Architect","Artificial Intelligence Researcher","Big Data Architect","Big Data Engineer","Big Data Specialist","Build and Release Engineer","Build Engineer","Chef Operations Engineer","Data Analysts","Data Architect","DevOps Architect","DevOps Engineer","ELK Engineer","Gerrit Administrator","Gerrit Administrator","Jenkins Engineer","Jira Administrator","Kubernetes Operations Engineer","Machine learning Architect","Machine Learning Engineer","Operations Engineer","Principle Engineer in Artificial Intelligence","Principle Engineer in Big Data","Principle Engineer in Data Analysis","Principle Engineer in Machine Learning","Production Support Engineer","Puppet Operations Engineer","Senior Build and Release Engineer","Senior Build Engineer","Senior DevOps Engineer","Senior Site reliability Engineer","Site Reliability Engineer (Kubernetes – Docker)","Splunk Engineer",".NET Developer","ACCESSIBILITY SPECIALIST","AGILE PROJECT MANAGER","Android Developer","Ansible Automation Engineer","AppDynamics Engineer","Application Security Engineer","Artifactory Engineer","Artificial Intelligence (AI) / Machine Learning Engineer","AWS DevOps Engineer","AWS Solutions Architect","Azure DevOps Engineer","Bamboo Engineer","Bitbucket Engineer","Blockchain Developer","BUSINESS SYSTEMS ANALYST","C# Developer","Chef InSpec Engineer","Cloud administrator","CLOUD ARCHITECT","Cloud architect","Cloud automation engineer","Cloud engineer",
"Cloud network engineer","Cloud Security Engineer","CNC Programmer","Coder","COMPUTER GRAPHICS ANIMATOR","Computer Hardware Engineer","Computer Network Architect","Computer Programmer","Computer Research Scientist","Computer Systems Analyst","Confluence Engineer","Consul Engineer","Coverage.py Engineer","DATA ANALYST","Data Analyst","DATA ARCHITECT","Data Engineer","DATA MODELER","DATA SCIENTIST","Data Scientist","DATABASE ADMINISTRATOR","Database Administrator","Datadog Engineer","Developer","DevOps Architect","DevOps Engineer","DevOps Engineer","DEVOPS MANAGER","DevSecOps Architect","DevSecOps Engineer","Director of Engineering","Docker Engineer","ELK Engineer","Embedded Software Engineer","Entry Level Developer","Entry Level Network Engineer","Entry Level Programmer","Entry Level Software Developer","Entry Level Software Engineer","Entry Level Web Developer","Envoy Engineer","Falco Engineer","FluentD Engineer","Fortify Engineer","FRAMEWORKS SPECIALIST","Front End Developer","Front End Web Developer","FRONT-END DESIGNER","FRONT-END DEVELOPER","Full Stack Developer","Full Stack JAVA Developer/Programmer/Engineer","Full Stack Python Developer/Programmer/Engineer","FULL-STACK DEVELOPER","Game Developer","GAME DEVELOPER","GCP DevOps Engineer","Gerrit Engineer","Git Engineer",
"Github Engineer","GitLab Engineer","GitLab Engineer","Gradle Engineer","Grafana Engineer","Groovy Engineer","INFORMATION ARCHITECT","Information Security Analyst","INTERACTION DESIGNER","IOS Developer","Istio Engineer","IT Manager","JaCoCO Engineer","Java Developer","Java Developer","JavaScript Developer","Jenkins Engineer","JIRA Engineer","Jr Developer","Junior Developer","Junior Front End Developer","Junior IOS Developer","Junior Software Developer","Junior Software Engineer","Junior Web Developer","JUnit Engineer","kubernetes Administrator","Kubernetes Engineer","Machine Learning Engineer","MAVEN Engineer","Micro services / API Lead Designer","MOBILE APP DEVELOPER","Mobile Application Developer","MOBILE DEVELOPER","Mulesoft Developer","Nagios Engineer","Network and Systems Administrator","Network Engineer","New Grad Software Engineer","New Relic Engineer","Nexus Engineer","Nomad Engineer","Notary Engineer","Octopus Deploy Engineer","OpenShift Engineer","OpenStack Engineer","Oracle Developer","Oracle SQL Developer","Packer Engineer","PHP Developer","PHP Developer","Powershell Engineer","PRODUCT MANAGER","Programmer","Programmer Analyst","Prometheus Engineer","Puppet Engineer","PyTest Engineer","Python Developer","PYTHON DEVELOPER","Python Developer","QA (QUALITY ASSURANCE) SPECIALIST","QA Engineer","React Developer","Robotics Engineer","RUBY ON RAILS DEVELOPER","Salesforce Developer","Search Engine Optimization","SECURITY SPECIALIST","Selenium Engineer","Senior Ansible Development Engineer","Senior Cloud Architect","Senior DevOps Architect","Senior DevOps Engineer","Senior DevSecOps Architect","Senior DevSecOps Engineer","Senior SRE Architect","Senior SRE Engineer","Sharepoint Developer","Software Developer","SOFTWARE DEVELOPERS","Software Engineer","Software Engineer","SonarQube Engineer","Splunk Engineer","Splunk Enterprise Security Engineer","SQL Developer","SRE Architect","SRE Engineer","SYSTEMS ADMINISTRATOR","SYSTEMS ENGINEER","TeamCity Engineer","Tech Sales Engineer","TECHNICAL ACCOUNT MANAGER","TECHNICAL LEAD","Terraform Engineer","TFS Engineer","Twistkock Engineer","UDeploy Engineer","UI DESIGNER","UI Developer","Unity Developer","UX DESIGNER","Vault Engineer","Web Designer (UI/UX Designer)","Web Developer","Web Developer","WordPress Developer","WORDPRESS DEVELOPER","XL Deploy Engineer","Zabbix Engineer",
"Business Analyst ","Market Research Analyst ","Digital Marketing Strategist ","Social Media Manager","Marketing Manager ","Business Development Manager","Technical Writer ","Content Manager" ,
"React js Developer", "Angular js developer",
 "Computer vision expert", "RoR developer","Java developer", "Python developer", 
 "Node js developer","PHP developer", "Fresher", "Laravel developer", 
 "Customer support executive","Telecalling","IOS developer","Android developer","Javacript developer",
 "Anotation Expert","Computer support Executive","Back Office","Machinine Learning",
 "CEO","CTO","CIO/Chief Digital Officer/Chief Innovation Officer","VP of Product Management/Head of Product","Product Manager","VP of Marketing","VP of Engineering/Director of Engineering","Chief Architect","Software Architect","Engineering Project Manager/Engineering Manager","Technical Lead/Engineering Lead/Team Lead","Principal Software Engineer","Senior Software Engineer/Senior Software Developer","Software Engineer","Software Developer","Junior Software Developer","Intern Software Developer",
 "CTO","CIO/Chief Digital Officer/Chief Innovation Officer","VP of Product Management/Head of Product","Product Manager","VP of Marketing","VP of Engineering","Director of Engineering","Chief Architect","Software Architect","Engineering Project Manager","Engineering Manager","Technical Project Manager","Project Manager","Business Account Manager","Senior Manager IT","IT Infra Manager","Procurement manager","Learning and Development Manager","Learning and Development co-ordinators",
 "HR Coordinator","Payroll Coordinator","Recruiting Coordinator","HR Specialist","HR Generalist","Recruiter","Human Resource Information Specialist","HR Manager","Recruiting Manager","HR Business Partner","HR Director","Recruiting Director","VP of HR","Chief Human Resource Officer","Career Consultant","Career Advisor","Assignment Coordinator","Placement Coordinator","Career Development Strategist","Personnel Agent","Human Resources Officer",
 "SEO Manager","SEO Engineer","Digital Marketing Manager","Digital Marketing Analyst","Social Media Marketing Manager","Social Media Marketing Analyst","MARKETING TECHNOLOGIST","SEO CONSULTANT","WEB ANALYTICS DEVELOPER","DIGITAL MARKETING MANAGER","SOCIAL MEDIA MANAGER","GROWTH HACKER","CONTENT MANAGER","CONTENT STRATEGIST",
 "Admin Big Data","Ansible Operations Engineer","Artifactory Administrator","Artificial intelligence / Machine Learning Engineer","Artificial Intelligence / Machine Learning Leader","Artificial Intelligence / Machine Learning Sr.Leader","Artificial intelligence Architect","Artificial Intelligence Researcher","Big Data Architect","Big Data Engineer","Big Data Specialist","Build and Release Engineer","Build Engineer","Chef Operations Engineer","Data Analysts","Data Architect","DevOps Architect","DevOps Engineer","ELK Engineer","Gerrit Administrator","Gerrit Administrator","Jenkins Engineer","Jira Administrator","Kubernetes Operations Engineer","Machine learning Architect","Machine Learning Engineer","Operations Engineer","Principle Engineer in Artificial Intelligence","Principle Engineer in Big Data","Principle Engineer in Data Analysis","Principle Engineer in Machine Learning","Production Support Engineer","Puppet Operations Engineer","Senior Build and Release Engineer","Senior Build Engineer","Senior DevOps Engineer","Senior Site reliability Engineer","Site Reliability Engineer (Kubernetes – Docker)","Splunk Engineer",".NET Developer","ACCESSIBILITY SPECIALIST","AGILE PROJECT MANAGER","Android Developer","Ansible Automation Engineer","AppDynamics Engineer","Application Security Engineer","Artifactory Engineer","Artificial Intelligence (AI) / Machine Learning Engineer","AWS DevOps Engineer","AWS Solutions Architect","Azure DevOps Engineer","Bamboo Engineer","Bitbucket Engineer","Blockchain Developer","BUSINESS SYSTEMS ANALYST","C# Developer","Chef InSpec Engineer","Cloud administrator","CLOUD ARCHITECT","Cloud architect","Cloud automation engineer","Cloud engineer",
 "Cloud network engineer","Cloud Security Engineer","CNC Programmer","Coder","COMPUTER GRAPHICS ANIMATOR","Computer Hardware Engineer","Computer Network Architect","Computer Programmer","Computer Research Scientist","Computer Systems Analyst","Confluence Engineer","Consul Engineer","Coverage.py Engineer","DATA ANALYST","Data Analyst","DATA ARCHITECT","Data Engineer","DATA MODELER","DATA SCIENTIST","Data Scientist","DATABASE ADMINISTRATOR","Database Administrator","Datadog Engineer","Developer","DevOps Architect","DevOps Engineer","DevOps Engineer","DEVOPS MANAGER","DevSecOps Architect","DevSecOps Engineer","Director of Engineering","Docker Engineer","ELK Engineer","Embedded Software Engineer","Entry Level Developer","Entry Level Network Engineer","Entry Level Programmer","Entry Level Software Developer","Entry Level Software Engineer","Entry Level Web Developer","Envoy Engineer","Falco Engineer","FluentD Engineer","Fortify Engineer","FRAMEWORKS SPECIALIST","Front End Developer","Front End Web Developer","FRONT-END DESIGNER","FRONT-END DEVELOPER","Full Stack Developer","Full Stack JAVA Developer/Programmer/Engineer","Full Stack Python Developer/Programmer/Engineer","FULL-STACK DEVELOPER","Game Developer","GAME DEVELOPER","GCP DevOps Engineer","Gerrit Engineer","Git Engineer",
 "Github Engineer","GitLab Engineer","GitLab Engineer","Gradle Engineer","Grafana Engineer","Groovy Engineer","INFORMATION ARCHITECT","Information Security Analyst","INTERACTION DESIGNER","IOS Developer","Istio Engineer","IT Manager","JaCoCO Engineer","Java Developer","Java Developer","JavaScript Developer","Jenkins Engineer","JIRA Engineer","Jr Developer","Junior Developer","Junior Front End Developer","Junior IOS Developer","Junior Software Developer","Junior Software Engineer","Junior Web Developer","JUnit Engineer","kubernetes Administrator","Kubernetes Engineer","Machine Learning Engineer","MAVEN Engineer","Micro services / API Lead Designer","MOBILE APP DEVELOPER","Mobile Application Developer","MOBILE DEVELOPER","Mulesoft Developer","Nagios Engineer","Network and Systems Administrator","Network Engineer","New Grad Software Engineer","New Relic Engineer","Nexus Engineer","Nomad Engineer","Notary Engineer","Octopus Deploy Engineer","OpenShift Engineer","OpenStack Engineer","Oracle Developer","Oracle SQL Developer","Packer Engineer","PHP Developer","PHP Developer","Powershell Engineer","PRODUCT MANAGER","Programmer","Programmer Analyst","Prometheus Engineer","Puppet Engineer","PyTest Engineer","Python Developer","PYTHON DEVELOPER","Python Developer","QA (QUALITY ASSURANCE) SPECIALIST","QA Engineer","React Developer","Robotics Engineer","RUBY ON RAILS DEVELOPER","Salesforce Developer","Search Engine Optimization","SECURITY SPECIALIST","Selenium Engineer","Senior Ansible Development Engineer","Senior Cloud Architect","Senior DevOps Architect","Senior DevOps Engineer","Senior DevSecOps Architect","Senior DevSecOps Engineer","Senior SRE Architect","Senior SRE Engineer","Sharepoint Developer","Software Developer","SOFTWARE DEVELOPERS","Software Engineer","Software Engineer","SonarQube Engineer","Splunk Engineer","Splunk Enterprise Security Engineer","SQL Developer","SRE Architect","SRE Engineer","SYSTEMS ADMINISTRATOR","SYSTEMS ENGINEER","TeamCity Engineer","Tech Sales Engineer","TECHNICAL ACCOUNT MANAGER","TECHNICAL LEAD","Terraform Engineer","TFS Engineer","Twistkock Engineer","UDeploy Engineer","UI DESIGNER","UI Developer","Unity Developer","UX DESIGNER","Vault Engineer","Web Designer (UI/UX Designer)","Web Developer","Web Developer","WordPress Developer","WORDPRESS DEVELOPER","XL Deploy Engineer","Zabbix Engineer",
 "Business Analyst ","Market Research Analyst ","Digital Marketing Strategist ","Social Media Manager","Marketing Manager ","Business Development Manager","Technical Writer ","Content Manager", "Business development executive","Business analyst","Data scientist","Digital marketing strategist","Social media specialist","Management consultant","Investment banker","Marketing manager","Graphic designer","Content writer","Market research analyst","Customer relationship manager","Area Sales Manager","Data Center Operations Manager","Data and Applied Science Manager","Instructional Designer","Senior Executive Assistant","Senior Partner Manager","Application Trainer","Media Asset Coordinator","Project Co Ordinator","Sr. Planning Manager ","Technical Writer	","Content Manager	","Quality Assurance Manager"


]






  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), countries);
  