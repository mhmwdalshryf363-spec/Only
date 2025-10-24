// Basic data for each planet (edit/add images/text as needed)
const PLANETS = {
  mercury: {
    name: "Mercury",
    desc: "A small, rocky planet — closest to the Sun.",
    radius: "2,440 km",
    class: "mercury",
    showMoon: false,
    scale: 0.45
  },
  venus: {
    name: "Venus",
    desc: "Thick toxic atmosphere, very hot surface.",
    radius: "6,052 km",
    class: "venus",
    showMoon: false,
    scale: 0.8
  },
  earth: {
    name: "Earth",
    desc: "Our home — water, life, one natural moon.",
    radius: "6,371 km",
    class: "earth",
    showMoon: true,
    scale: 1
  },
  mars: {
    name: "Mars",
    desc: "The red planet — dusty and cold with polar caps.",
    radius: "3,390 km",
    class: "mars",
    showMoon: false,
    scale: 0.6
  },
  jupiter: {
    name: "Jupiter",
    desc: "A gas giant with a Great Red Spot storm.",
    radius: "69,911 km",
    class: "jupiter",
    showMoon: false,
    scale: 1.8
  },
  saturn: {
    name: "Saturn",
    desc: "Gas giant with a visible ring system (not modeled here).",
    radius: "58,232 km",
    class: "saturn",
    showMoon: false,
    scale: 1.6
  },
  uranus: {
    name: "Uranus",
    desc: "An ice giant tilted on its side.",
    radius: "25,362 km",
    class: "uranus",
    showMoon: false,
    scale: 1.2
  },
  neptune: {
    name: "Neptune",
    desc: "A deep blue ice giant — far and cold.",
    radius: "24,622 km",
    class: "neptune",
    showMoon: false,
    scale: 1.2
  },
  pluto: {
    name: "Pluto",
    desc: "A dwarf planet in the Kuiper belt.",
    radius: "1,188 km",
    class: "pluto",
    showMoon: false,
    scale: 0.35
  }
};

const planetEl = document.getElementById("planet");
const infoName = document.getElementById("info-name");
const infoDesc = document.getElementById("info-desc");
const infoRadius = document.getElementById("info-radius");
const moonEl = document.getElementById("moon");
const haloEl = document.getElementById("halo");

// Listen to radio changes
document.querySelectorAll('input[name="planet"]').forEach(radio => {
  radio.addEventListener("change", (e) => {
    const key = e.target.value;
    setPlanet(key);
  });
});

// set initial
function setPlanet(key){
  const data = PLANETS[key] || PLANETS.earth;

  // update classes (color/texture)
  planetEl.className = "planet " + data.class;

  // scale planet visually
  const baseSize = 160; // CSS default in px
  const size = Math.max(48, Math.round(baseSize * data.scale));
  planetEl.style.width = size + "px";
  planetEl.style.height = size + "px";

  // halo scales with planet
  const haloSize = Math.round(size * 2.2);
  haloEl.style.width = haloSize + "px";
  haloEl.style.height = haloSize + "px";

  // info text
  infoName.textContent = data.name;
  infoDesc.textContent = data.desc;
  infoRadius.textContent = data.radius;

  // moon visibility
  if (data.showMoon) {
    moonEl.style.opacity = "1";
    moonEl.style.display = "block";
  } else {
    moonEl.style.opacity = "0";
    // keep display to block to preserve animation but hidden
    moonEl.style.display = "block";
  }

  // subtle rotation speed change per planet
  const speed = 6 + Math.round((1 - data.scale) * 8);
  planetEl.style.animationDuration = `${Math.max(4, speed)}s`;
}

// init default selection (read checked)
const checked = document.querySelector('input[name="planet"]:checked');
if (checked) setPlanet(checked.value);
