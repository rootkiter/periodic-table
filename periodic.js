var element_top = [
    ["H",  "Li", "Na", "K" , "Rb", "Cs"   , "Fr"   ],
    [      "Be", "Mg", "Ca", "Sr", "Ba"   , "Ra"   ],
    [                  "Sc", "Y" , "La-Lu", "Ac-Lr"],
    [                  "Ti", "Zr", "Hf"   , "Rf"   ],
    [                  "V" , "Nb", "Ta"   , "Db"   ],
    [                  "Cr", "Mo", "W"    , "Sg"   ],
    [                  "Mn", "Tc", "Re"   , "Bh"   ],
    [                  "Fe", "Ru", "Os"   , "Hs"   ],
    [                  "Co", "Rh", "Ir"   , "Mt"   ],
    [                  "Ni", "Pd", "Pt"   , "Ds"   ],
    [                  "Cu", "Ag", "Au"   , "Rg"   ],
    [                  "Zn", "Cd", "Hg"   , "Cn"   ],
    [      "B" , "Al", "Ga", "In", "Tl"   , "Nh"  ],
    [      "C" , "Si", "Ge", "Sn", "Pb"   , "Fl"  ],
    [      "N" , "P" , "As", "Sb", "Bi"   , "Mc"  ],
    [      "O" , "S" , "Se", "Te", "Po"   , "Lv"  ],
    [      "F" , "Cl", "Br", "I" , "At"   , "Ts"  ],
    ["He", "Ne", "Ar", "Kr", "Xe", "Rn"   , "Og"  ]
];

var rare = [
    [
        "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu",
        "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"
    ],
    [
        "Ac", "Th", "Pa", "U" , "Np", "Pu", "Am",
        "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"
    ]
];

function table_load() {
    var topPeriodic = document.getElementById("top-periodic");
    for (var colper in element_top) {
        var element_now = element_top[colper];
        var periodics = "";

        var columnEle = document.createElement("div");
        columnEle.setAttribute("class", "column")
        for (var perio in element_now) {
            var perio = createTopElement(element_now[perio]);
            columnEle.appendChild(perio);
        }
        topPeriodic.appendChild(columnEle)
    }

    var morePeriodic = document.getElementById("perBotton");
    for (var more in rare) {
        var morepers = rare[more];
        var linebucket = document.createElement("div")
        linebucket.classList.add("line")
        for (var perio in morepers) {
            var per = createTopElement(morepers[perio])
            linebucket.append(per);
        }
        morePeriodic.append(linebucket)
    }
}

function createTopElement(perio) {
    var element = document.createElement("div")
    element.classList.add("cell-packing")
    var perioElement = createPerioElement(perio)
    element.appendChild(createPerioElement(perio))
    return element
}

function createPerioElement(perio) {
    var element = document.createElement("div");
    element.classList.add("base-element");
    element.classList.add("column-element");
    // element.classList.add("base-color");
    if( chemical_table.hasOwnProperty(perio) ) {
        var proton = document.createElement("div")
        proton.classList.add("cell-proton")
        proton.textContent = chemical_table[perio]["proton"]
        var cellen = document.createElement("div")
        cellen.classList.add("cell-en")
        cellen.textContent = perio
        var head = document.createElement("div")
        head.classList.add("cell-head")
        head.appendChild(proton)
        head.appendChild(cellen)
        var bodycn = document.createElement("div")
        bodycn.classList.add("cell-body-cn")
        bodycn.textContent = chemical_table[perio]["cn"]
        var tail = document.createElement("div")
        tail.classList.add("cell-foot-quality")
        tail.textContent = chemical_table[perio]["quality"]

        var percell = document.createElement("div")
        percell.classList.add("per-cell")

        var percurrent = chemical_table[perio]
        if(percurrent.hasOwnProperty("group")) {
            var color = percurrent["group"]
            percell.classList.add("cell-"+color+"-color")
        }

        percell.appendChild(head)
        percell.appendChild(bodycn)
        percell.appendChild(tail)
        return percell
    } else {
        element.textContent = perio
    }
    return element;
}
