import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.resolve(__dirname, '../assets/imgs/Modelos');
const outputFile = path.resolve(__dirname, '../data/modelData.js');

let models = [];

const directories = fs.readdirSync(imagesDir).filter(dir => fs.statSync(path.join(imagesDir, dir)).isDirectory());
directories.sort((a, b) => parseInt(a.split('_')[0], 10) - parseInt(b.split('_')[0], 10));

directories.forEach(dir => {
    const modelPath = path.join(imagesDir, dir);
    const files = fs.readdirSync(modelPath);
    const parts = dir.split('_');
    const name = parts.slice(1).join('_');

    // Leer archivo CARACTERISTICAS.TXT o CARACTERISTICAS.txt
    const characteristicsFile = [path.join(modelPath, 'CARACTERISTICAS.TXT'), path.join(modelPath, 'CARACTERISTICAS.txt')]
        .find(fs.existsSync); // Encuentra el archivo que exista

    let characteristics = {
        Tipo: '',
        Descripción: '',
        Frente: '',
        Patilla: '',
        Lente: '',
        Peso: '',
        Talle: []
    };

    if (characteristicsFile) {
        const characteristicsData = fs.readFileSync(characteristicsFile, 'utf8');
        characteristicsData.split('\n').forEach(line => {
            const [key, ...value] = line.split(': ');
            if (key && value.length > 0) {
                if (key === 'Talle') {
                    characteristics[key] = value[0].split(',').map(size => size.trim()); // Manejar tamaños como array
                } else {
                    characteristics[key] = value.join(': ').trim();
                }
            }
        });
    }

    let modelInfo = {
        name: name,
        lensType: characteristics.Tipo,
        sizes: characteristics.Talle,
        description: characteristics.Descripción,
        imageUrl: '',
        colors: []
    };

    files.forEach(file => {
        if (file === 'MAIN_1.png') {
            modelInfo.imageUrl = `./src/assets/imgs/Modelos/${dir}/${file}`;
        } else if (file.startsWith('COLOR')) {
            const colorName = file.split('_')[1].replace('.png', '');
            modelInfo.colors.push({
                name: colorName,
                imageUrl: `./src/assets/imgs/Modelos/${dir}/${file}`
            });
        }
    });
    models.push(modelInfo);
});

const dataString = `export const models = ${JSON.stringify(models, null, 2)};`;
fs.writeFileSync(outputFile, dataString);
