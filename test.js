function greet(name) {
    if (!name) {
        throw new Error('Name required')
    }
    console.log(`Hello ${name}`);
}

greet('World');
greet();
