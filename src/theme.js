const darkThemeColors = {
  linkColorDark: '#8590A5',
  linkColorHoverDark: '#D7E6ED',
  linkColorActiveDark: '#F1F5F7',
  navigationBackground: '#252B3B',
  menuItemHeader: '#A8AEB5',
  text: '#505d69',
  altText: '#343A40',
  primaryColor: '#5664d2',
}
const lightThemeColors = {
  linkColorDark: '#74788D',
  linkColorHoverDark: '#343A40',
  linkColorActiveDark: '#5664d2',
  navigationBackground: '#fff',
  menuItemHeader: '#8590a5',
  text: '#505d69',
  altText: '#343A40',
  primaryColor: '#5664d2',
}
export const defaultTheme = {
  //sidebar
  sidebarWidth: '262px',
  sidebarLinkColor: darkThemeColors.linkColorDark,
  sidebarLinkColorHover: darkThemeColors.linkColorHoverDark,
  sidebarLinkColorActive: darkThemeColors.linkColorActiveDark,
  sidebarBackgroundColor: darkThemeColors.navigationBackground,
  sidebarLinkHeaderColor: darkThemeColors.navigationHeader,
  //top nav
  topNavBackgroundColor: darkThemeColors.navigationBackground,
  topNavIconColor: '#EAECEF',
  topNavSearchFieldBackgroundColor: 'rgba(241,245,247,.07)', 
  topNavSearchFieldColor: '#fff',
  topNavSearchPlaceholderColor: '#9A9CA4',
  topNavUserProfileColor: darkThemeColors.text,
  topNavUserAvatarBackgroundColor: '#f1f5f7',
  topNavDropDownColor: darkThemeColors.text,
  topNavDropDownBackgroundColor: '#fff',
  topNavDropDownHeaderColor: darkThemeColors.altText,
  topNavDropDownTextColor: darkThemeColors.altText,
  topNavDropDownDividerColor: '#eff2f7',
  topNavDropDownBorderColor: 'rgba(0,0,0,.15)',
  topNavDropDownBoxShadow: 'rgb(0 0 0 / 10%)',
  topNavDropDownIconBackgroundColor: darkThemeColors.linkColorDark,
  topNavDropDownIconColor: '#fff',
  //footer
  footerColor: '#74788d',
  footerBackgroundColor: '#fff',
  // breadcrumps
  breadcrumpLinkColor: darkThemeColors.text,
  // main content
  cardBackgroundColor: '#fff',
  mainContentTabColor: '#696D8C',
  mainContentTabColorActive: '#252B3B',
  // tables
  tableSettingsPanelColor: darkThemeColors.text,
  tableSettingsPanelBackgroundColor: '#fff',
  toggleSwitchBackgroundColor: '#fff',
  toggleSwitchBackgroundColorChecked: darkThemeColors.primaryColor,
  toggleSwitchBorderColor: 'rgba(0,0,0,.25)',
  toggleSwitchBackgroundColorBorderColorChecked: darkThemeColors.primaryColor,
  globalFilterInputColor: darkThemeColors.text,
  globalFilterBackgroundColor: '#fff',
  globalFilterBorderColor: '#ced4da',
  globalFilterInputColorFocus: darkThemeColors.text,
  globalFilterBackgroundColorFocus: '#fff',
  globalFilterBorderColorFocus: '#b1bbc4',
  tableResponsiveColor: darkThemeColors.text,
  tableResponsiveBorderColor: '#eff2f7',
  tableResponsiveStrippedColor: '#f2f2f2',
  tableColor: darkThemeColors.text,
  tableBorderColor: '#eff2f7',
  tableStickyHeaderBackgroundColor: '#fff',
  tableHeaderBackgroundColor: 'transparent',
  tableBoxShadowInsetColor: 'transparent',
  tableStrippedColor: '#f2f2f2',
  tableBackgroundColor: '#fff',
  tableUnreadColor: '#fff',
  tableUnreadBackgroundColor: darkThemeColors.linkColorDark,
  tableColumnFilterInputColor: darkThemeColors.text, 
  tableColumnFilterInputBorderColor: '#D5DBE2',
  tableColumnFilterInputBackgroundColor: '#fff',
  tableColumnFilterInputColorFocus: darkThemeColors.text, 
  tableColumnFilterInputBorderColorFocus: '#b1bbc4',
  tableColumnFilterInputBackgroundColorFocus: '#fff',
  paginationGoToPageColor: darkThemeColors.text,
  paginationGoToPageBackgroundColor: '#fff',
  paginationGoToPageBorderColor: '#D5DBE2',
  paginationGoToPageColorFocus: darkThemeColors.text,
  paginationGoToPageBackgroundColorFocus: '#fff',
  paginationGoToPageBorderColorFocus: '#b1bbc4',
  // buttons
  outlineButtonColor: darkThemeColors.text,
  outlineButtonBorderColor: darkThemeColors.primaryColor,
  primaryButtonColor: '#fff',
  primaryButtonBackgroundColor: darkThemeColors.primaryColor,
  primaryButtonBorderColor: darkThemeColors.primaryColor,
  lightButtonColor: '#000',
  lightButtonBackgroundColor: '#eff2f7',
  lightButtonBorderColor: '#eff2f7',
  greyButtonColor: '#fff',
  greyButtonBackgroundColor: '#74788d',
  greyButtonBorderColor: '#74788d',
  //login page
  loginImageBackgroundColor: '#fff',
  loginFormBackgroundColor: '#fff',
  loginHeaderSubTitleColor: '#74788d',
  loginIconColor: darkThemeColors.primaryColor,
  loginFormInputColor: darkThemeColors.text,
  loginFormInputBackgroundColor: '#fff',
  loginFormInputBorderColor: '#ced4da',
  loginButtonColor: '#fff',
  loginButtonBackgroundColor: darkThemeColors.primaryColor,
  loginButtonBorderColor: darkThemeColors.primaryColor,
  //links
  primaryLinkColor: darkThemeColors.primaryColor,
  //Checkboxes
  checkBoxBackgroundColor: '#fff',
  checkBoxBorderColor: '#ddd',
  checkBoxBackgroundColorChecked: darkThemeColors.linkColorDark,
  concentricCircleBackgroundColor: '#fff',
  concentricCircleBackgroundColorChecked: 'grey',
  //notifications red pin
  notificationBellRedPinBackgroundColor: '#ff3d60',
  //dropDown
  dropDownColor: darkThemeColors.text,
  dropDownBorderColor: '#ced4da',
  dropDownOptionColor: 'black',
  dropDownOptionColorSelected: 'lightgrey',
  //settings
  settingsGroupBorderColor: '#efefef'
}
export const lightTheme = {
  //sidebar
  sidebarWidth: '262px',
  sidebarLinkColor: lightThemeColors.linkColorDark,
  sidebarLinkColorHover: lightThemeColors.linkColorHoverDark,
  sidebarLinkColorActive: lightThemeColors.linkColorActiveDark,
  sidebarBackgroundColor: lightThemeColors.navigationBackground,
  sidebarLinkHeaderColor: lightThemeColors.navigationHeader,
  //top nav
  topNavBackgroundColor: lightThemeColors.navigationBackground,
  topNavIconColor: '#636E75',
  topNavSearchFieldBackgroundColor: '#F1F5F7', 
  topNavSearchFieldColor: '#fff',
  topNavSearchPlaceholderColor: '#74788D',
  topNavUserProfileColor: lightThemeColors.text,
  topNavUserAvatarBackgroundColor: '#f1f5f7',
  topNavDropDownColor: lightThemeColors.text,
  topNavDropDownBackgroundColor: '#fff',
  topNavDropDownHeaderColor: lightThemeColors.altText,
  topNavDropDownTextColor: lightThemeColors.altText,
  topNavDropDownDividerColor: '#eff2f7',
  topNavDropDownBorderColor: 'rgba(0,0,0,.15)',
  topNavDropDownBoxShadow: 'rgb(0 0 0 / 10%)',
  topNavDropDownIconBackgroundColor: lightThemeColors.linkColorDark,
  topNavDropDownIconColor: '#fff',
  //footer
  footerColor: '#74788d',
  footerBackgroundColor: '#fff',
  // breadcrumps
  breadcrumpLinkColor: lightThemeColors.text,
  // main content
  cardBackgroundColor: '#fff',
  mainContentTabColor: '#696D8C',
  mainContentTabColorActive: '#252B3B',
  // tables
  tableSettingsPanelColor: lightThemeColors.text,
  tableSettingsPanelBackgroundColor: '#fff',
  toggleSwitchBackgroundColor: '#fff',
  toggleSwitchBackgroundColorChecked: lightThemeColors.primaryColor,
  toggleSwitchBorderColor: 'rgba(0,0,0,.25)',
  toggleSwitchBackgroundColorBorderColorChecked: lightThemeColors.primaryColor,
  globalFilterInputColor: lightThemeColors.text,
  globalFilterBackgroundColor: '#fff',
  globalFilterBorderColor: '#ced4da',
  globalFilterInputColorFocus: lightThemeColors.text,
  globalFilterBackgroundColorFocus: '#fff',
  globalFilterBorderColorFocus: '#b1bbc4',
  tableResponsiveColor: lightThemeColors.text,
  tableResponsiveBorderColor: '#eff2f7',
  tableResponsiveStrippedColor: '#f2f2f2',
  tableColor: lightThemeColors.text,
  tableBorderColor: '#eff2f7',
  tableStickyHeaderBackgroundColor: '#fff',
  tableHeaderBackgroundColor: 'transparent',
  tableBoxShadowInsetColor: 'transparent',
  tableStrippedColor: '#f2f2f2',
  tableBackgroundColor: '#fff',
  tableUnreadColor: '#fff',
  tableUnreadBackgroundColor: lightThemeColors.linkColorDark,
  tableColumnFilterInputColor: lightThemeColors.text, 
  tableColumnFilterInputBorderColor: '#D5DBE2',
  tableColumnFilterInputBackgroundColor: '#fff',
  tableColumnFilterInputColorFocus: lightThemeColors.text, 
  tableColumnFilterInputBorderColorFocus: '#b1bbc4',
  tableColumnFilterInputBackgroundColorFocus: '#fff',
  paginationGoToPageColor: lightThemeColors.text,
  paginationGoToPageBackgroundColor: '#fff',
  paginationGoToPageBorderColor: '#D5DBE2',
  paginationGoToPageColorFocus: lightThemeColors.text,
  paginationGoToPageBackgroundColorFocus: '#fff',
  paginationGoToPageBorderColorFocus: '#b1bbc4',
  // buttons
  outlineButtonColor: lightThemeColors.text,
  outlineButtonBorderColor: lightThemeColors.primaryColor,
  primaryButtonColor: '#fff',
  primaryButtonBackgroundColor: lightThemeColors.primaryColor,
  primaryButtonBorderColor: lightThemeColors.primaryColor,
  lightButtonColor: '#000',
  lightButtonBackgroundColor: '#eff2f7',
  lightButtonBorderColor: '#eff2f7',
  greyButtonColor: '#fff',
  greyButtonBackgroundColor: '#74788d',
  greyButtonBorderColor: '#74788d',
  //login page
  loginImageBackgroundColor: '#fff',
  loginFormBackgroundColor: '#fff',
  loginHeaderSubTitleColor: '#74788d',
  loginIconColor: lightThemeColors.primaryColor,
  loginFormInputColor: lightThemeColors.text,
  loginFormInputBackgroundColor: '#fff',
  loginFormInputBorderColor: '#ced4da',
  loginButtonColor: '#fff',
  loginButtonBackgroundColor: lightThemeColors.primaryColor,
  loginButtonBorderColor: lightThemeColors.primaryColor,
  //links
  primaryLinkColor: lightThemeColors.primaryColor,
  //Checkboxes
  checkBoxBackgroundColor: '#fff',
  checkBoxBorderColor: '#ddd',
  checkBoxBackgroundColorChecked: lightThemeColors.linkColorDark,
  concentricCircleBackgroundColor: '#fff',
  concentricCircleBackgroundColorChecked: 'grey',
  //notifications red pin
  notificationBellRedPinBackgroundColor: '#ff3d60',
  //dropDown
  dropDownColor: lightThemeColors.text,
  dropDownBorderColor: '#ced4da',
  dropDownOptionColor: 'black',
  dropDownOptionColorSelected: 'lightgrey',
  //settings
  settingsGroupBorderColor: '#efefef'
}