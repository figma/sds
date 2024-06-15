import * as figmaJSON from "../../figma.config.json" with { type: "json" };

const urls = figmaJSON.default.codeConnect.documentUrlSubstitutions;

const resourceMap = {
  "<FIGMA_URL_ACCORDION>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_ACCORDION_ITEM>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_AVATAR>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_AVATAR_BLOCK>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_AVATAR_GROUP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_BUTTON>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_BUTTON_DANGER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_BUTTON_GROUP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CARD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CHECKBOX>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CHECKBOX_FIELD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CHECKBOX_GROUP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_DIALOG>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_DESCRIPTION>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_LABEL>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_LEGEND>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_ERROR_MESSAGE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FIELD_GROUP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FIELDSET>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FOOTER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FORM_LOG_IN>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FORM_CONTACT>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FORM_REGISTER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FORM_NEWSLETTER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FORM_FORGOT_PASSWORD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_FORM_SHIPPING>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_HEADER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_HEADER_AUTH>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_HERO_BASIC>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_HERO_ACTIONS>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_HERO_NEWSLETTER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_HERO_FORM>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_HERO_IMAGE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_ICON_BUTTON>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_INPUT>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_INPUT_FIELD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_LOGO>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_MENU_MENU>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_MENU_HEADING>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_MENU_SHORTCUT>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_MENU_ITEM>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_MENU_HEADER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_MENU_SEPARATOR>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_NAVIGATION>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_NAVIGATION_ITEM>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_NOTIFICATION>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_PAGINATION_PAGE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_PAGINATION_GAP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_PAGINATION_PREVIOUS>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_PAGINATION_NEXT>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_PAGINATION_LIST>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_PAGINATION>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_RADIO>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_RADIOFIELD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_RADIOGROUP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SEARCH>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SECTION_IMAGE_CONTENT_PANEL>":
    "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SECTION_IMAGE_CONTENT_PANEL_REVERSE>":
    "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SECTION_IMAGE_PANEL_DOUBLE>":
    "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SECTION_IMAGE_PANEL_IMAGE>":
    "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SELECT>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SELECT_FIELD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SLIDER>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SLIDER_FIELD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SWITCH_GROUP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SWITCH_FIELD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_SWITCH>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TAB>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TABS>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TAG>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TAG_TOGGLE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TAG_TOGGLE_GROUP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_TITLE_HERO>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_TITLE_PAGE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_SUBTITLE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_HEADING>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_SUBHEADING>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_EMPHASIS>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_LINK>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_STRONG>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_SMALL>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_CODE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_LIST>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_LIST_ITEM>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_LINK_LIST>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_LINK_LIST_ITEM>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_PRICE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_CONTENT_HEADING>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_CONTENT_TITLE>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_AREA>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TEXT_AREA_FIELD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_TOOLTIP>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CARDS_PRODUCT_INFO_CARD>":
    "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CARDS_PRICING_CARD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CARDS_TESTIMONIAL_CARD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CARDS_STATS_CARD>": "https://figma.github.io/sds/storybook",
  "<FIGMA_URL_CARDS_REVIEW_CARD>": "https://figma.github.io/sds/storybook",
};

// TODO: get all node ids from code connect json,
// TODO: make dev resources request to update / remove for all nodes