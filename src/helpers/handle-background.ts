import {formatCategory} from './format-category';

export const handleBackground = (category: string): string => {
  switch (formatCategory(category.toLowerCase())) {
    case 'alkalineEarthMetals'.toLowerCase():
      return '#009cc7';
    case 'alkaliMetals'.toLowerCase():
      return '#fe1110';
    case 'nobleGases'.toLowerCase():
      return '#6f25a1';
    case 'nonMetal'.toLowerCase():
      return '#f5be25';
    case 'transitionMetals'.toLowerCase():
      return '#ff8000';
    case 'lanthanoids'.toLowerCase():
      return '#cf6142';
    case 'actinoids'.toLowerCase():
      return '#57733b';
    case 'postTransitionMetals'.toLowerCase():
      return '#006da4';
    case 'metalloids':
      return '#c41d3d';
    case 'metalloid':
      return '#c41d3d';
    default:
      return '#a1d344';
  }
};
