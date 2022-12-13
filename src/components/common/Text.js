import R from '@components/utils/R';
import React from 'react';
import { Text as Textc, Platform } from 'react-native';

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  extraLargeTitle: R.unit.fontSize(60, 0.3),
  largeTitle: R.unit.fontSize(45, 0.3),
  h0: R.unit.fontSize(36, 0.3),
  h1: R.unit.fontSize(32, 0.3),
  h2: R.unit.fontSize(28, 0.3),
  h3: R.unit.fontSize(26, 0.3),
  h4: R.unit.fontSize(24, 0.3),
  h5: R.unit.fontSize(22, 0.3),
  h6: R.unit.fontSize(20, 0.3),
  body1: R.unit.fontSize(18, 0.3),
  body2: R.unit.fontSize(16, 0.3),
  body3: R.unit.fontSize(14, 0.3),
  body4: R.unit.fontSize(12, 0.3),
  body5: R.unit.fontSize(10, 0.3),
  body6: R.unit.fontSize(9, 0.3),
  small: R.unit.fontSize(8, 0.3),
};

export const FONTVARIANTS = {
  extraLargeTitle: {
    fontSize: SIZES.extraLargeTitle,
    lineHeight: R.unit.fontSize(65, 0.3),
  },
  largeTitle: {
    fontSize: SIZES.largeTitle,
    lineHeight: R.unit.fontSize(60, 0.3),
  },
  h0: { fontSize: SIZES.h0, lineHeight: R.unit.fontSize(40, 0.3) },
  h1: { fontSize: SIZES.h1, lineHeight: R.unit.fontSize(38, 0.3) },
  h2: { fontSize: SIZES.h2, lineHeight: R.unit.fontSize(36, 0.3) },
  h3: { fontSize: SIZES.h3, lineHeight: R.unit.fontSize(32, 0.3) },
  h4: { fontSize: SIZES.h4, lineHeight: R.unit.fontSize(32, 0.3) },
  h5: { fontSize: SIZES.h5, lineHeight: R.unit.fontSize(24, 0.3) },
  h6: { fontSize: SIZES.h6, lineHeight: R.unit.fontSize(28, 0.3) },
  body1: { fontSize: SIZES.body1, lineHeight: R.unit.fontSize(22, 0.3) },
  body2: { fontSize: SIZES.body2, lineHeight: R.unit.fontSize(19, 0.3) },
  body3: { fontSize: SIZES.body3, lineHeight: R.unit.fontSize(24, 0.3) },
  body4: { fontSize: SIZES.body4, lineHeight: R.unit.fontSize(16, 0.3) },
  body5: { fontSize: SIZES.body5, lineHeight: R.unit.fontSize(14, 0.3) },
  body6: { fontSize: SIZES.body5, lineHeight: R.unit.fontSize(13, 0.3) },
  small: { fontSize: SIZES.small, lineHeight: R.unit.fontSize(12, 0.3) },
};

export const FONTSSTYLE = {
  //IINTER FAMILY
  InterBlack: {
    fontFamily: 'Inter-Black', //(900)
  },
  InterThin: {
    fontFamily: 'Inter-Thin', //(100)
  },
  Interlight: {
    fontFamily: 'Inter-Light', //(300)
  },
  InterExtraLight: {
    fontFamily: 'Inter-ExtraLight', //(200)
  },
  InterBold: {
    fontFamily: 'Inter-Bold', //(700)
  },
  InterSemiBold: {
    fontFamily: 'Inter-SemiBold', //(600)
  },
  InterExtraBold: {
    fontFamily: 'Inter-ExtraBold', //(800)
  },
  InterMedium: {
    fontFamily: 'Inter-Medium', //(500)
  },
  InterRegular: {
    fontFamily: 'Inter-Regular', //(400)
  },
  InterUnderline: {
    fontFamily: 'nunito-Light',
    textDecorationLine: 'underline',
  },
  //POPPINSS FAMILY
  PoppinsBlack: {
    fontFamily: 'Poppins-Black',
  },
  PoppinsBlackItalic: {
    fontFamily: 'Poppins-BlackItalic',
  },
  PoppinsThin: {
    fontFamily: 'Poppins-Thin',
  },
  PoppinsThinItalic: {
    fontFamily: 'Poppins-ThinItalic',
  },
  PoppinsLight: {
    fontFamily: 'Poppins-Light',
  },
  PoppinsLightItalic: {
    fontFamily: 'Poppins-LightItalic',
  },
  PoppinsExtraLight: {
    fontFamily: 'Poppins-ExtraLight',
  },
  PoppinsExtraLightItalic: {
    fontFamily: 'Poppins-ExtraLightItalic',
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Bold',
  },
  PoppinsBoldItalic: {
    fontFamily: 'Poppins-BoldItalic',
  },
  PoppinsSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  PoppinsSemiBoldItalic: {
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  PoppinsExtraBold: {
    fontFamily: 'Poppins-ExtraBold',
  },
  PoppinsExtraBoldItalic: {
    fontFamily: 'Poppins-ExtraBoldItalic',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
  PoppinsMediumItalic: {
    fontFamily: 'Poppins-MediumItalic',
  },
  PoppinsRegular: {
    fontFamily: 'Poppins-Regular',
  },
  PoppinsItalic: {
    fontFamily: 'Poppins-Italic',
  },
  //SEQUEL 45
  Sequel451: {
    fontFamily:
      Platform.OS === 'android' ? 'Sequel-45file1' : 'Sequel100Wide-45',
  },
  Sequel452: {
    fontFamily:
      Platform.OS === 'android' ? 'Sequel-45file1' : 'Sequel100Wide-45',
  },
  //SEQUEL 55
  Sequel551: {
    fontFamily:
      Platform.OS === 'android' ? 'Sequel-55file1' : 'Sequel100Wide-55',
  },
  Sequel552: {
    fontFamily:
      Platform.OS === 'android' ? 'Sequel-55file2' : 'Sequel100Wide-55',
  },
  //SEQUEL 65
  Sequel651: {
    fontFamily:
      Platform.OS === 'android' ? 'Sequel-65file1' : 'Sequel100Wide-65',
  },
  Sequel652: {
    fontFamily:
      Platform.OS === 'android' ? 'Sequel-65file2' : 'Sequel100Wide-65',
  },
  WorkSansBlack: {
    fontFamily: 'WorkSans-Black',
  },
  WorkSansBlackitalic: {
    fontFamily: 'WorkSans-BlackItalic',
  },
  WorkSansmedium: {
    fontFamily: 'WorkSans-Medium',
  },
  WorkSansextraBold: {
    fontFamily: 'WorkSans-ExtraBold',
  },
  WorkSansextraRegular: {
    fontFamily: 'WorkSans-Regular',
  },
};

const Text = props => {
  const {
    children,
    numberOfLines,
    style,
    variant,
    color = 'white',
    gutterTop = 0,
    gutterBottom = 0,
    align = 'auto',
    transform = 'none',
    font = '',
    letterSpacing = 0,
    top = 0,
    onPress,
    lineHeight,
  } = props;
  return (
    <Textc
      style={[
        {
          marginTop: R.unit.scale(gutterTop),
          marginBottom: R.unit.scale(gutterBottom),
          color: color,
          textAlign: align,
          textTransform: transform,
          letterSpacing: letterSpacing,
          top: top,
          lineHeight: lineHeight,
        },
        style,
        variant && FONTVARIANTS[variant],
        font && FONTSSTYLE[font],
        lineHeight && {
          lineHeight: R.unit.scale(lineHeight),
        },
      ]}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {children}
    </Textc>
  );
};

export default Text;
