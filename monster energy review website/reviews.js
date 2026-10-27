const reviews = [
  { name: "Mango Loco", rating: 5, img: "images/mangoloco.jpg", text: "lorem ipsum" },
  { name: "Ultra Strawberry Dreams", rating: 5, img: "images/strawberrydreams.jpg", text: "lorem ipsum" },
  { name: "Ultra Blue Hawaiian", rating: 5, img: "images/bluehawaiian.jpg", text: "lorem ipsum" },
  { name: "Ultra White", rating: 5, img: "images/white.jpg", text: "lorem ipsum" },
  { name: "Java Monster Irish Blend", rating: 5, img: "images/irishblend.jpg", text: "lorem ipsum" },
];

const container = document.getElementById("reviews");

for (const r of reviews) {
  const details = document.createElement("details");

  const summary = document.createElement("summary");

  const img = document.createElement("img");
  img.src = r.img;
  img.alt = r.name;

  const title = document.createElement("h3");
  title.textContent = r.name;

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${r.rating}/5`;

  summary.append(img, title, rating);

  const body = document.createElement("p");
  body.textContent = r.text;

  details.append(summary, body);
  container.append(details);
}