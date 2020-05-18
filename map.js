const svg = d3.select("svg");

const projection = d3.geoOrthographic();
const pathGenerator = d3.geoPath().projection(projection);

svg
  .append("path")
  .attr("class", "sphere")
  .attr("d", pathGenerator)
  .attr("d", d3.geoCircle);

d3.json("https://unpkg.com/world-atlas@1.1.4/world/110m.json").then((data) => {
  const countries = topojson.feature(data, data.objects.countries);
  console.log(countries);
  svg
    .selectAll("path")
    .data(countries.features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", pathGenerator);
});
