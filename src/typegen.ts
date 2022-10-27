export type Data = {
general: {
variant: string;
mainTitle: string;
mainText: string;
content: {
featuredImage: string;
icon: string | { url: string };
title: string;
text: string;
link: string;
buttonText: string;
target: string;
}[];
};
colors: {
primary: string;
secondary: string;
light: string;
gray2: string;
gray7: string;
gray9: string;
};
typography: {
mainTitleTypo: string;
mainTextTypo: string;
titleTypo: string;
textTypo: string;
};
border: {
enableBorder: boolean;
borderItemWidth: number;
borderItemStyle: string;
borderItemColor: string;
borderItemRadius: number;
};
customCSS: {
code: string;
};
};