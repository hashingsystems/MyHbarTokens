import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,

  header: {
    background: palette.greenBold,
    activeItemBackground: palette.greenLight,
    border: palette.brownBold
  },

  footer: {
    background: "#f5f5f5",
    appTitle: "#acacac",
    border: "#9f9f9f"
  },
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: 'rgba(0, 61, 99, 0.7)',
  /**
   * The main tinting color.
   */
  primary: palette.orange,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,

  /**
   * The default color of text in for primary button.
   */
  textPrimaryButton: 'rgb(0, 61, 99)',

  /**
   * The default color of text in many components.
   */
  text: palette.white,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where 
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
  */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
  */
   storybookTextColor: palette.black,

  /**
   * Picker text color
   * 
  */
  pickerTextColor: "orange",

  pickerIcon: "white",

  iconHeaderNavBarItem: palette.white,

  iconCreateNewDropdownListItem: palette.black,

  appActionBarBackground: "#E5E5E5",

  dashboarBorder: "#E0E0E0",

  headerSelectedItemBG: "#22559E",

  panelBackground: "#ECEDEE",

  borderPrimary: palette.brownBold,

  borderSecondary: palette.brownLight
}
