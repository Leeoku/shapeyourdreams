import { Text } from '@mantine/core';


const regexes = [
  {
    pattern: /<color=([^>]+)>(.*?)<\/color>/g,
    replacements: (match, color, text, key) => (
      <span key={key} style={{ color }}>
        {text}
      </span>
    ),
  },
  { pattern: '/<sprite=[125]>/g', replacement: '"EMOJI' },
];


const replaceColorTags = (text) => {
  const regex = /<color=([#a-zA-Z0-9]+)>(.*?)<\/color>/g;

  // Replace <color> tags with span elements
  return text.replace(regex, (match, color, content) => {
    return `<span style="color:${color}">${content}</span>`;
  });
};

const replaceSpriteWithImage = (text) => {
  // Define a mapping for sprite numbers to image URLs
  const spriteImages = {
    1: `/images/sprite1.png`, // Replace with actual image URLs
    2: `/images/sprite2.png`,
    5: `/images/sprite5.png`,
  };

  // Regex to match <sprite={num}> and replace with corresponding <img> tag
  return text.replace(/<sprite=(\d+)>/g, (match, num) => {
    const spriteImageUrl = spriteImages[num];
    if (spriteImageUrl) {
      // Return an img tag with the appropriate sprite image URL')
      return `<img src="${spriteImageUrl}" alt="sprite ${num}" style="width: 20px; height: 20px; vertical-align: middle;" />`;
    }
    return match; // Return the original match if no corresponding image is found
  });
};

export const StyledDescription = ({ description }) => {
  const parsedDescription = replaceColorTags(description);
  const parsedSpriteDescription = replaceSpriteWithImage(parsedDescription);
  return <p dangerouslySetInnerHTML={{ __html: parsedSpriteDescription }} />;
};