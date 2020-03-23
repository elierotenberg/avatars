import blazerAndShirt from './blazerAndShirt';
import blazerAndSweater from './blazerAndSweater';
import collarAndSweater from './collarAndSweater';
import graphicShirt from './graphicShirt';
import hoodie from './hoodie';
import overall from './overall';
import shirtCrewNeck from './shirtCrewNeck';
import shirtScoopNeck from './shirtScoopNeck';
import shirtVNeck from './shirtVNeck';
import Options from '../options';
import { Random } from '@dicebear/avatars';

export default (random: Random, options: Options) => {
    let colors = {
        black: ['#262E33'],
        blue: ['#65C9FF', '#5199E4', '#25557C'],
        gray: ['#E5E5E5', '#929598'],
        heather: ['#3C4F5C'],
        pastel: ['#B1E2FF', '#A7FFC4', '#FFDEB5', '#FFAFB9', '#FFFFB1'],
        pink: ['#FF488E'],
        red: ['#FF5C5C'],
        white: ['#FFFFFF'],
    };

    let possibleColors: string[] = [];

    while (possibleColors.length === 0) {
        Object.entries(colors)
            .filter(([name]) => options.get('clothesColor', [name]).includes(name))
            .forEach(([, values]) => {
                possibleColors = [...possibleColors, ...values];
            });

        options.delete('clothesColor');
    }

    let clothes = {
        blazer: [blazerAndShirt, blazerAndSweater],
        sweater: [collarAndSweater],
        shirt: [graphicShirt, shirtCrewNeck, shirtScoopNeck, shirtVNeck],
        hoodie: [hoodie],
        overall: [overall],
    };

    let possibleClothes: Array<(random: Random, options: Options, color: string) => string> = [];

    while (possibleClothes.length === 0) {
        Object.entries(clothes)
            .filter(([name]) => options.get('clothesColor', [name]).includes(name))
            .forEach(([, values]) => {
                possibleClothes = [...possibleClothes, ...values];
            });

        options.delete('clothes');
    }

    let color = random.pickone(possibleColors);
    let clothe = random.pickone(possibleClothes);

    return clothe(random, options, color);
};
