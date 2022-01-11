function cone(radius, height) {

    let volume = (Math.PI * radius ** 2 * height) / 3;
    let area = Math.PI * radius ** 2 + Math.PI * radius * Math.sqrt(radius ** 2 + height ** 2);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);