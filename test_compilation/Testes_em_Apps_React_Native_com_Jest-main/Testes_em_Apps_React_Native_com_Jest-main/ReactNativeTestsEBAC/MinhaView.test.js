import React from 'react';
import renderer from 'react-test-renderer';
import MinhaView from './MinhaView';
import { cliqueAqui } from './MinhaView';

test('verificar renderização', () => {
    const tree = renderer.create('<MinhaView/>').toJSON()
    expect(tree).toMatchSnapshot()
});


test('verifica cliqueAqui', () => {
    expect(cliqueAqui()).toBeTruthy();
});
