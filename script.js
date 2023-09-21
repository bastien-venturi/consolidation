let booksarray = [
    {
        name: "La Machine à explorer le temps",
        img: "https://m.media-amazon.com/images/I/71cTomY34xL._SY466_.jpg",
        category: ["Science-fiction", "Roman"],
        author:"H. G. Wells",
        date:"1895",
        resume:"Lors d'un dîner, un homme prétend avoir voyagé dans le temps. Il leur raconte son voyage dans le futur où de nouveaux humains sont apparus.",
        link:"https://www.amazon.com.be/Machine-explorer-temps-Classiques-Contemporains/dp/2210756707/ref=sr_1_1?crid=2TC8Y9DMRUV4&keywords=La+Machine+%C3%A0+explorer+le+temps+%281895%29&qid=1695198033&sprefix=la+machine+%C3%A0+explorer+le+temps+1895+%2Caps%2C889&sr=8-1",
    },
    {
        name: "Frankenstein ou le Prométhée moderne",
        img: "https://media.senscritique.com/media/000000173314/300/frankenstein_ou_le_promethee_moderne.gif",
        category: ["Roman"],
        author:"Mary Shelley",
        date:"1821",
        resume:"Le professeur Victor Frankenstein va créer le Monstre de Frankenstein défiant la mort en voulant s'élever au statut de Dieu créateur.",
        link:"https://www.amazon.com.be/Frankenstein-Prom%C3%A9th%C3%A9e-moderne-Mary-Shelley/dp/2070468089/ref=sr_1_5?crid=1OQSNDQQ56XYC&keywords=Frankenstein+ou+le+Prom%C3%A9th%C3%A9e+moderne&qid=1695198104&sprefix=frankenstein+ou+le+prom%C3%A9th%C3%A9e+moderne%2Caps%2C70&sr=8-5",
    },
    {
        name: "L'Appel de Cthulhu",
        img: "https://media.senscritique.com/media/000011531172/300/l_appel_de_cthulhu.jpg",
        category: ["Fantastique", "Nouvelle"],
        author:"Howard Phillips Lovecraft",
        date:"2015",
        resume:"La terreur, l’horreur, l’informe du rêve, Lovecraft ne les éveille pas pour jouer. Il sait seulement que tout cela nous en disposons déjà, depuis l’enfance, ou dans l’inquiétude du quotidien. Il en est juste un formidable amplificateur.",
        link:"https://www.amazon.com.be/LAppel-Cthulhu-H-P-Lovecraft/dp/B083N3NVXF/ref=sr_1_1?crid=YHJWO5Z2D6ZZ&keywords=L%27Appel+de+Cthulhu&qid=1695198120&sprefix=l%27appel+de+cthulhu%2Caps%2C65&sr=8-1",
    },
    {
        name: "Dracula",
        img: "https://media.senscritique.com/media/000017456310/300/dracula.jpg",
        category: ["Fantastique", "Roman"],
        author:"Bram Stoker",
        date:"1963",
        resume:"Le jeune Jonathan Harker rend visite au comte Dracula dans son château des Carpates afin de l’informer du domaine qu’il vient d’acheter pour lui en Angleterre.",
        link:"https://www.amazon.com.be/Dracula-Bram-Stoker/dp/2290057401/ref=sr_1_5?crid=34BBZU8D9NQ18&keywords=Dracula&qid=1695198138&sprefix=dracula%2Caps%2C59&sr=8-5",
    },
    {
        name: "La Guerre des mondes",
        img: "https://media.senscritique.com/media/000017075345/300/la_guerre_des_mondes.jpg",
        category: ["Science-fiction", "Roman"],
        author:"Herbert George Wells",
        date:"1898",
        resume:"Un météore écrasé près de Londres s'avère être une construction extraterrestre qui un jour se transforme en une machine de guerre gigantesque.",
        link:"https://www.amazon.com.be/Guerre-mondes-Herbert-George-Wells/dp/2070308553/ref=sr_1_5?crid=1STQ06MPJUWDE&keywords=La+Guerre+des+mondes&qid=1695204468&sprefix=la+guerre+des+mondes%2Caps%2C296&sr=8-5",
    },
    {
        name: "Le Monde perdu",
        img: "https://media.senscritique.com/media/000009401811/300/le_monde_perdu.jpg",
        category: ["Jeunesse", "Roman"],
        author:"Arthur Conan Doyle",
        date:"1912",
        resume:"Trois Anglais prêts à tout prennent part, au bout du monde, à l'expédition du professeur Challenger. Perdus, traqués par des hommes-singes, frôlés par des ailes monstrueuses, les voyageurs découvrent alors l'impossible : la préhistoire n'est pas morte !",
        link:"https://www.amazon.com.be/monde-perdu-Michael-Crichton/dp/2266193481/ref=sr_1_1?crid=3EC1HIMXROIJG&keywords=Le+Monde+perdu&qid=1695204106&sprefix=le+monde+perdu%2Caps%2C71&sr=8-1",
    },
    {
        name: "L'Étrange Cas du Dr Jekyll et de Mr Hyde",
        img: "https://media.senscritique.com/media/000009253987/300/l_etrange_cas_du_dr_jekyll_et_de_mr_hyde.jpg",
        category: ["Science-fiction", "Nouvelle"],
        author:"Robert Louis Stevenson",
        date:"1886",
        resume:"Quel lien étrange peut unir un médecin et un criminel ? Le bon docteur Jekyll est-il victime ou complice de l'ignoble Mister Hyde ? Le vieux docteur Lanyon trouvera-t-il la clef de ce mystère insondable ?",
        link:"https://www.amazon.com.be/L%C3%A9trange-cas-Dr-Jekyll-Hyde/dp/2012202306/ref=sr_1_1?crid=1A7TB57PF0IYY&keywords=L%27%C3%89trange+Cas+du+Dr+Jekyll+et+de+Mr+Hyde&qid=1695198210&sprefix=l%27%C3%A9trange+cas+du+dr+jekyll+et+de+mr+hyde+%2Caps%2C171&sr=8-1",
    },
    {
        name: "Le Portrait de Dorian Gray",
        img: "https://media.senscritique.com/media/000006605798/300/le_portrait_de_dorian_gray.jpg",
        category: ["Philosophie", "Roman"],
        author:"Oscar Wilde",
        date:"1891",
        resume:"Dorian Gray, un homme d’une extrême beauté, a fait un vœu : garder pour toujours sa beauté tandis que son portrait subit le fardeau de ses pêchés.",
        link:"https://www.amazon.com.be/Portrait-Dorian-Gray-569/dp/2253002887/ref=sr_1_1?crid=HMVTOHA46CP3&keywords=Le+Portrait+de+Dorian+Gray&qid=1695198223&sprefix=le+portrait+de+dorian+gray%2Caps%2C76&sr=8-1",
    },
    {
        name: "L'Homme invisible",
        img: "https://media.senscritique.com/media/000017702938/300/l_homme_invisible.jpg",
        category: ["Science-fiction", "Roman"],
        author:"H. G. Wells",
        date:"1897",
        resume:"Après de coûteuses recherches, le savant Griffin a trouvé la formule pour devenir invisible. Il décide d'en user sur lui et sombre dans la folie.",
        link:"https://www.amazon.com.be/LHomme-invisible-Herbert-George-Wells/dp/2253004855/ref=sr_1_2?crid=LOAIN0VX8QVI&keywords=L%27Homme+invisible&qid=1695204681&sprefix=l%27homme+invisible%2Caps%2C113&sr=8-2",
    },
    {
        name: "L'Île du docteur Moreau",
        img: "https://media.senscritique.com/media/000016404590/300/l_ile_du_docteur_moreau.jpg",
        category: ["Science-fiction", "Roman"],
        author:"H. G. Wells",
        date:"1901",
        resume:"Seul survivant d'un naufrage, Edward Prendick est recueilli sur une île des mers du Sud par un personnage des plus singuliers : le docteur Moreau. Il sera confronté à de noirs secrets et d'étranges créatures.",
        link:"https://www.amazon.com.be/docteur-Moreau-Herbert-George-Wells/dp/2070401782/ref=sr_1_1?crid=R7P8KS50OAOO&keywords=L%27%C3%8Ele+du+docteur+Moreau&qid=1695198264&sprefix=l%27%C3%AEle+du+docteur+moreau%2Caps%2C59&sr=8-1",
    },
]

let categoryColors = {
    'Roman': 'red',
    'Science-fiction': 'blue',
    'Fantastique': 'green',
    'Nouvelles': 'orange',
    'Jeunesse': 'purple',
    'Philosophie': 'pink'
};



let container = document.getElementById("container");

booksarray.forEach(function (book) {
    let section = document.createElement("section");
    section.className = "book-section bg-white  flex flex-col  p-4 rounded-lg shadow-md";

    let coverimg = document.createElement("img");
    coverimg.src = book.img;
    coverimg.alt = book.name;
    coverimg.className = "book-img    bg-cover  p-5  ";

    let category = document.createElement("p");
    category.textContent = book.category;
    category.className = "category text-center font-semibold";
    category.style.color = categoryColors[book.category[0]];

    let bookname = document.createElement("p");
    bookname.textContent = book.name;
    bookname.className = "bookname text-center text-xl font-semibold mt-2";

    let bookauthor = document.createElement("p");
    bookauthor.textContent = "Author: " + book.author;
    bookauthor.className = "bookauthor font-semibold text-center";

    let bookdate = document.createElement("p");
    bookdate.textContent = book.date;
    bookdate.className = "bookdate text-lg font-semibold text-center";

    let bookresume = document.createElement("p");
    bookresume.textContent =  book.resume;
    bookresume.className = "bookresume font-semibold text-center";

    let linkimg = document.createElement("img");
    linkimg.src = "/consolidation/ressources/pngegg.png";
    linkimg.alt = "Purchase";
    linkimg.className =  "link-img  h-10 ";

    let booklink = document.createElement("a");
    booklink.href = book.link;
    booklink.target = "_blank";
    booklink.appendChild(linkimg);
    booklink.className =  "book-link inline-flex mt-10 ";


    section.appendChild(coverimg);
    section.appendChild(category);
    section.appendChild(bookname);
    section.appendChild(bookauthor);
    section.appendChild(bookdate);
    section.appendChild(bookresume);
    section.appendChild(booklink);

    container.appendChild(section);
});

