// HomeScreen.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';


describe('HomeScreen', () => {
  test('renders correctly', () => {
    const { getByTestId, getByText } = render(<HomeScreen />);
    
    // Check if the Header component is rendered
    const header = getByTestId('home-header');
    expect(header).toBeTruthy();

    // Check if the category filter component is rendered
    const categoryFilter = getByTestId('category-filter');
    expect(categoryFilter).toBeTruthy();

    // Check if the text content of the category filter is correct
    const categoryText = getByText('Web dev');
    expect(categoryText).toBeTruthy();
  });
});
