import React from 'react';
import './SkillsContent.css';
import reactIcon from '../../../resources/images/icons/react-icon.png';
import angularIcon from '../../../resources/images/icons/angular-icon.png';
import cSharpIcon from '../../../resources/images/icons/csharp-icon.png';
import gitIcon from '../../../resources/images/icons/git-icon.png';
import githubIcon from '../../../resources/images/icons/github-icon.png';
import javaIcon from '../../../resources/images/icons/java-icon.png';
import javascriptIcon from '../../../resources/images/icons/javascript-icon.png';
import pythonIcon from '../../../resources/images/icons/python-icon.png';
import pytorchIcon from '../../../resources/images/icons/pytorch-icon.png';
import typescriptIcon from '../../../resources/images/icons/typescript-icon.png';
import unityIcon from '../../../resources/images/icons/unity-icon.png';

const SkillsContent = () => {
  return (
    <div className='skills-content-container'>
      <img src={reactIcon} className='icon-image' title='React'></img>
      <img src={javascriptIcon} className='icon-image' title='Javascript'></img>
      <img src={typescriptIcon} className='icon-image' title='Typescript'></img>
      <img src={gitIcon} className='icon-image' title='Git'></img>
      <img src={githubIcon} className='icon-image' title='Github'></img>
      <img src={angularIcon} className='icon-image' title='Angular'></img>
      <img src={pythonIcon} className='icon-image' title='Python'></img>
      <img src={pytorchIcon} className='icon-image' title='PyTorch'></img>
      <img src={javaIcon} className='icon-image' title='Java'></img>
      <img src={cSharpIcon} className='icon-image' title='C#'></img>
      <img src={unityIcon} className='icon-image' title='Unity Engine'></img>
    </div>
  );
}

export default SkillsContent