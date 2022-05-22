import { createGlobalStyle } from 'styled-components';
import OverpassBlack from '../assets/fonts/Overpass-Black.ttf';
import OverpassBlackItalic from '../assets/fonts/Overpass-BlackItalic.ttf';
import OverpassBold from '../assets/fonts/Overpass-Bold.ttf';
import OverpassBoldItalic from '../assets/fonts/Overpass-BoldItalic.ttf';
import OverpassExtraBold from '../assets/fonts/Overpass-ExtraBold.ttf';
import OverpassExtraBoldItalic from '../assets/fonts/Overpass-ExtraBoldItalic.ttf';
import OverpassExtraLight from '../assets/fonts/Overpass-ExtraLight.ttf';
import OverpassExtraLightItalic from '../assets/fonts/Overpass-ExtraLightItalic.ttf';
import OverpassItalic from '../assets/fonts/Overpass-Italic.ttf';
import OverpassLight from '../assets/fonts/Overpass-Light.ttf';
import OverpassLightItalic from '../assets/fonts/Overpass-LightItalic.ttf';
import OverpassMedium from '../assets/fonts/Overpass-Medium.ttf';
import OverpassMediumItalic from '../assets/fonts/Overpass-MediumItalic.ttf';
import OverpassRegular from '../assets/fonts/Overpass-Regular.ttf';
import OverpassSemiBold from '../assets/fonts/Overpass-SemiBold.ttf';
import OverpassSemiBoldItalic from '../assets/fonts/Overpass-SemiBoldItalic.ttf';
import OverpassThin from '../assets/fonts/Overpass-Thin.ttf';
import OverpassThinItalic from '../assets/fonts/Overpass-ThinItalic.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Overpass Black';
        src: url(${OverpassBlack});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Black Italic';
        src: url(${OverpassBlackItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Bold';
        src: url(${OverpassBold});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Bold Italic';
        src: url(${OverpassBoldItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Extra Bold';
        src: url(${OverpassExtraBold});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Extra Bold Italic';
        src: url(${OverpassExtraBoldItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Extra Light';
        src: url(${OverpassExtraLight});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Extra Light Italic';
        src: url(${OverpassExtraLightItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Italic';
        src: url(${OverpassItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Light';
        src: url(${OverpassLight});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Light Italic';
        src: url(${OverpassLightItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Medium';
        src: url(${OverpassMedium});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Medium Italic';
        src: url(${OverpassMediumItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass';
        src: url(${OverpassRegular});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Semi Bold';
        src: url(${OverpassSemiBold});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Semi Bold Italic';
        src: url(${OverpassSemiBoldItalic});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Thin';
        src: url(${OverpassThin});
        font-style: 'normal';
    }
    @font-face {
        font-family: 'Overpass Thin Italic';
        src: url(${OverpassThinItalic});
        font-style: 'normal';
    }
`;
