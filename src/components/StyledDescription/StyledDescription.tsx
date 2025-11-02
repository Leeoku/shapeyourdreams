import { Text } from '@mantine/core';


const replaceColorTags = (text:any) => {
  const regex = /<color=([#a-zA-Z0-9]+)>(.*?)<\/color>/g;

  // Replace <color> tags with span elements
  return text.replace(regex, (match:any, color:any, content:any) => {
    return `<span style="color:${color}">${content}</span>`;
  });
};

const replaceSpriteWithImage = (text:any) => {
  // Define a mapping for sprite numbers to image URLs
  const spriteImages = {
    1: `/sprites/sprite1.png`, // Replace with actual image URLs
    2: `/sprites/sprite2.png`,
    5: `/sprites/sprite5.png`,
  };

  // Regex to match <sprite={num}> and replace with corresponding <img> tag
  return text.replace(/<sprite=(\d+)>/g, (match:any, num:number) => {
    // @ts-ignore
    const spriteImageUrl = spriteImages[num];
    if (spriteImageUrl) {
      // Return an img tag with the appropriate sprite image URL')
      return `<img src="${spriteImageUrl}" alt="sprite ${num}" style="width: 20px; height: 20px; vertical-align: middle;" />`;
    }
    return match; // Return the original match if no corresponding image is found
  });
};

// @ts-ignore
export const StyledDescription = ({ description }) => {
  const parsedDescription = replaceColorTags(description);
  const parsedSpriteDescription = replaceSpriteWithImage(parsedDescription);
  return <p dangerouslySetInnerHTML={{ __html: parsedSpriteDescription }} />;
};