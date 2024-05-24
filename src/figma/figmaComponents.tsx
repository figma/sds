import "react";
import { useEffect, useState } from "react";
import { InputField } from "ui";
type ComponentMap = { [k: string]: { id: string; name: string; key: string } };

export const COMPONENTS: ComponentMap = {
  Text: {
    name: "Text",
    id: "9762:407",
    key: "Text",
  },
  Strong: {
    name: "Strong",
    id: "9762:409",
    key: "Strong",
  },
  TextLink: {
    name: "TextLink",
    id: "9762:411",
    key: "TextLink",
  },
  Code: {
    name: "Code",
    id: "9762:414",
    key: "Code",
  },
  Button: {
    name: "Button",
    id: "9762:426",
    key: "Button",
  },
  Dialog: {
    name: "Dialog",
    id: "9762:696",
    key: "Dialog",
  },
  DropdownMenu: {
    name: "Dropdown Menu",
    id: "9762:720",
    key: "DropdownMenu",
  },
  DropdownHeader: {
    name: "Dropdown Header",
    id: "9762:728",
    key: "DropdownHeader",
  },
  DropdownSeparator: {
    name: "Dropdown Separator",
    id: "9762:731",
    key: "DropdownSeparator",
  },
  DropdownSection: {
    name: "Dropdown Section",
    id: "9762:733",
    key: "DropdownSection",
  },
  DropdownDescription: {
    name: "Dropdown Description",
    id: "9762:737",
    key: "DropdownDescription",
  },
  DropdownShortcut: {
    name: "Dropdown Shortcut",
    id: "9762:739",
    key: "DropdownShortcut",
  },
  DropdownLabel: {
    name: "Dropdown Label",
    id: "9762:741",
    key: "DropdownLabel",
  },
  DropdownItem: {
    name: "Dropdown Item",
    id: "9762:743",
    key: "DropdownItem",
  },
  DropdownHeading: {
    name: "Dropdown Heading",
    id: "9762:760",
    key: "DropdownHeading",
  },
  ListboxDescription: {
    name: "Listbox Description",
    id: "9762:769",
    key: "ListboxDescription",
  },
  ListboxLabel: {
    name: "Listbox Label",
    id: "9762:771",
    key: "ListboxLabel",
  },
  ListboxOption: {
    name: "Listbox Option",
    id: "9762:773",
    key: "ListboxOption",
  },
  Listbox: {
    name: "Listbox",
    id: "9762:792",
    key: "Listbox",
  },
  Sticky: {
    name: "Sticky",
    id: "9762:847",
    key: "Sticky",
  },
  Input: {
    name: "Input",
    id: "9762:850",
    key: "Input",
  },
  PaginationGap: {
    name: "Pagination Gap",
    id: "9762:868",
    key: "PaginationGap",
  },
  PaginationNext: {
    name: "Pagination Next",
    id: "9762:870",
    key: "PaginationNext",
  },
  PaginationPrevious: {
    name: "Pagination Previous",
    id: "9762:880",
    key: "PaginationPrevious",
  },
  PaginationPage: {
    name: "Pagination Page",
    id: "9762:890",
    key: "PaginationPage",
  },
  Pagination: {
    name: "Pagination",
    id: "9762:899",
    key: "Pagination",
  },
  PaginationList: {
    name: "Pagination List",
    id: "9762:903",
    key: "PaginationList",
  },
  TableCell: {
    name: "Table Cell",
    id: "9762:911",
    key: "TableCell",
  },
  TableHeader: {
    name: "Table Header",
    id: "9762:936",
    key: "TableHeader",
  },
  TableRow: {
    name: "Table Row",
    id: "9762:961",
    key: "TableRow",
  },
  Table: {
    name: "Table",
    id: "9762:987",
    key: "Table",
  },
  Tag: {
    name: "Tag",
    id: "9762:1029",
    key: "Tag",
  },
  Avatar: {
    name: "Avatar",
    id: "9762:1103",
    key: "Avatar",
  },
  Textarea: {
    name: "Textarea",
    id: "9762:1135",
    key: "Textarea",
  },
  Select: {
    name: "Select",
    id: "9762:1162",
    key: "Select",
  },
  RadioGroup: {
    name: "Radio Group",
    id: "9762:1200",
    key: "RadioGroup",
  },
  Radio: {
    name: "Radio",
    id: "9762:1204",
    key: "Radio",
  },
  RadioField: {
    name: "Radio Field",
    id: "9762:1412",
    key: "RadioField",
  },
  CheckboxGroup: {
    name: "Checkbox Group",
    id: "9762:1426",
    key: "CheckboxGroup",
  },
  CheckboxField: {
    name: "Checkbox Field",
    id: "9762:1441",
    key: "CheckboxField",
  },
  Checkbox: {
    name: "Checkbox",
    id: "9762:1454",
    key: "Checkbox",
  },
  Switch: {
    name: "Switch",
    id: "9762:1701",
    key: "Switch",
  },
  SwitchField: {
    name: "Switch Field",
    id: "9762:1902",
    key: "SwitchField",
  },
  SwitchGroup: {
    name: "Switch Group",
    id: "9762:1921",
    key: "SwitchGroup",
  },
  ".IconAcademicCapSolid": {
    name: ".IconAcademicCapSolid",
    id: "9762:1926",
    key: ".IconAcademicCapSolid",
  },
  ".IconBattery100Solid": {
    name: ".IconBattery100Solid",
    id: "9762:1928",
    key: ".IconBattery100Solid",
  },
  ".IconCog6ToothSolid": {
    name: ".IconCog6ToothSolid",
    id: "9762:1930",
    key: ".IconCog6ToothSolid",
  },
  ".IconHandRaisedSolid": {
    name: ".IconHandRaisedSolid",
    id: "9762:1932",
    key: ".IconHandRaisedSolid",
  },
  ".IconQueueListSolid": {
    name: ".IconQueueListSolid",
    id: "9762:1934",
    key: ".IconQueueListSolid",
  },
  ".IconAdjustmentsHorizontalSolid": {
    name: ".IconAdjustmentsHorizontalSolid",
    id: "9762:1936",
    key: ".IconAdjustmentsHorizontalSolid",
  },
  ".IconBattery50Solid": {
    name: ".IconBattery50Solid",
    id: "9762:1938",
    key: ".IconBattery50Solid",
  },
  ".IconCog8ToothSolid": {
    name: ".IconCog8ToothSolid",
    id: "9762:1940",
    key: ".IconCog8ToothSolid",
  },
  ".IconHandThumbDownSolid": {
    name: ".IconHandThumbDownSolid",
    id: "9762:1942",
    key: ".IconHandThumbDownSolid",
  },
  ".IconRadioSolid": {
    name: ".IconRadioSolid",
    id: "9762:1944",
    key: ".IconRadioSolid",
  },
  ".IconAdjustmentsVerticalSolid": {
    name: ".IconAdjustmentsVerticalSolid",
    id: "9762:1946",
    key: ".IconAdjustmentsVerticalSolid",
  },
  ".IconBeakerSolid": {
    name: ".IconBeakerSolid",
    id: "9762:1948",
    key: ".IconBeakerSolid",
  },
  ".IconCommandLineSolid": {
    name: ".IconCommandLineSolid",
    id: "9762:1950",
    key: ".IconCommandLineSolid",
  },
  ".IconHandThumbUpSolid": {
    name: ".IconHandThumbUpSolid",
    id: "9762:1952",
    key: ".IconHandThumbUpSolid",
  },
  ".IconBellSolid": {
    name: ".IconBellSolid",
    id: "9762:1954",
    key: ".IconBellSolid",
  },
  ".IconComputerDesktopSolid": {
    name: ".IconComputerDesktopSolid",
    id: "9762:1956",
    key: ".IconComputerDesktopSolid",
  },
  ".IconHashtagSolid": {
    name: ".IconHashtagSolid",
    id: "9762:1958",
    key: ".IconHashtagSolid",
  },
  ".IconReceiptRefundSolid": {
    name: ".IconReceiptRefundSolid",
    id: "9762:1960",
    key: ".IconReceiptRefundSolid",
  },
  ".IconArchiveBoxArrowDownSolid": {
    name: ".IconArchiveBoxArrowDownSolid",
    id: "9762:1962",
    key: ".IconArchiveBoxArrowDownSolid",
  },
  ".IconBellAlertSolid": {
    name: ".IconBellAlertSolid",
    id: "9762:1964",
    key: ".IconBellAlertSolid",
  },
  ".IconCpuChipSolid": {
    name: ".IconCpuChipSolid",
    id: "9762:1966",
    key: ".IconCpuChipSolid",
  },
  ".IconHeartSolid": {
    name: ".IconHeartSolid",
    id: "9762:1968",
    key: ".IconHeartSolid",
  },
  ".IconRectangleGroupSolid": {
    name: ".IconRectangleGroupSolid",
    id: "9762:1970",
    key: ".IconRectangleGroupSolid",
  },
  ".IconArchiveBoxXMarkSolid": {
    name: ".IconArchiveBoxXMarkSolid",
    id: "9762:1972",
    key: ".IconArchiveBoxXMarkSolid",
  },
  ".IconBellSlashSolid": {
    name: ".IconBellSlashSolid",
    id: "9762:1974",
    key: ".IconBellSlashSolid",
  },
  ".IconCreditCardSolid": {
    name: ".IconCreditCardSolid",
    id: "9762:1976",
    key: ".IconCreditCardSolid",
  },
  ".IconHomeSolid": {
    name: ".IconHomeSolid",
    id: "9762:1978",
    key: ".IconHomeSolid",
  },
  ".IconRectangleStackSolid": {
    name: ".IconRectangleStackSolid",
    id: "9762:1980",
    key: ".IconRectangleStackSolid",
  },
  ".IconCubeSolid": {
    name: ".IconCubeSolid",
    id: "9762:1982",
    key: ".IconCubeSolid",
  },
  ".IconHomeModernSolid": {
    name: ".IconHomeModernSolid",
    id: "9762:1984",
    key: ".IconHomeModernSolid",
  },
  ".IconRocketLaunchSolid": {
    name: ".IconRocketLaunchSolid",
    id: "9762:1986",
    key: ".IconRocketLaunchSolid",
  },
  ".IconArrowDownCircleSolid": {
    name: ".IconArrowDownCircleSolid",
    id: "9762:1988",
    key: ".IconArrowDownCircleSolid",
  },
  ".IconBoltSolid": {
    name: ".IconBoltSolid",
    id: "9762:1990",
    key: ".IconBoltSolid",
  },
  ".IconCubeTransparentSolid": {
    name: ".IconCubeTransparentSolid",
    id: "9762:1992",
    key: ".IconCubeTransparentSolid",
  },
  ".IconIdentificationSolid": {
    name: ".IconIdentificationSolid",
    id: "9762:1994",
    key: ".IconIdentificationSolid",
  },
  ".IconRssSolid": {
    name: ".IconRssSolid",
    id: "9762:1996",
    key: ".IconRssSolid",
  },
  ".IconArrowDownLeftSolid": {
    name: ".IconArrowDownLeftSolid",
    id: "9762:1998",
    key: ".IconArrowDownLeftSolid",
  },
  ".IconBoltSlashSolid": {
    name: ".IconBoltSlashSolid",
    id: "9762:2000",
    key: ".IconBoltSlashSolid",
  },
  ".IconCurrencyBangladeshiSolid": {
    name: ".IconCurrencyBangladeshiSolid",
    id: "9762:2002",
    key: ".IconCurrencyBangladeshiSolid",
  },
  ".IconInboxSolid": {
    name: ".IconInboxSolid",
    id: "9762:2004",
    key: ".IconInboxSolid",
  },
  ".IconScaleSolid": {
    name: ".IconScaleSolid",
    id: "9762:2006",
    key: ".IconScaleSolid",
  },
  ".IconArrowDownOnSquareSolid": {
    name: ".IconArrowDownOnSquareSolid",
    id: "9762:2008",
    key: ".IconArrowDownOnSquareSolid",
  },
  ".IconInboxArrowDownSolid": {
    name: ".IconInboxArrowDownSolid",
    id: "9762:2010",
    key: ".IconInboxArrowDownSolid",
  },
  ".IconScissorsSolid": {
    name: ".IconScissorsSolid",
    id: "9762:2012",
    key: ".IconScissorsSolid",
  },
  ".IconArrowDownOnSquareStackSolid": {
    name: ".IconArrowDownOnSquareStackSolid",
    id: "9762:2014",
    key: ".IconArrowDownOnSquareStackSolid",
  },
  ".IconBookmarkSolid": {
    name: ".IconBookmarkSolid",
    id: "9762:2016",
    key: ".IconBookmarkSolid",
  },
  ".IconCurrencyEuroSolid": {
    name: ".IconCurrencyEuroSolid",
    id: "9762:2018",
    key: ".IconCurrencyEuroSolid",
  },
  ".IconInboxStackSolid": {
    name: ".IconInboxStackSolid",
    id: "9762:2020",
    key: ".IconInboxStackSolid",
  },
  ".IconServerSolid": {
    name: ".IconServerSolid",
    id: "9762:2022",
    key: ".IconServerSolid",
  },
  ".IconArrowDownRightSolid": {
    name: ".IconArrowDownRightSolid",
    id: "9762:2024",
    key: ".IconArrowDownRightSolid",
  },
  ".IconBookmarkSlashSolid": {
    name: ".IconBookmarkSlashSolid",
    id: "9762:2026",
    key: ".IconBookmarkSlashSolid",
  },
  ".IconCurrencyPoundSolid": {
    name: ".IconCurrencyPoundSolid",
    id: "9762:2028",
    key: ".IconCurrencyPoundSolid",
  },
  ".IconInformationCircleSolid": {
    name: ".IconInformationCircleSolid",
    id: "9762:2030",
    key: ".IconInformationCircleSolid",
  },
  ".IconServerStackSolid": {
    name: ".IconServerStackSolid",
    id: "9762:2032",
    key: ".IconServerStackSolid",
  },
  ".IconArrowDownTraySolid": {
    name: ".IconArrowDownTraySolid",
    id: "9762:2034",
    key: ".IconArrowDownTraySolid",
  },
  ".IconBookmarkSquareSolid": {
    name: ".IconBookmarkSquareSolid",
    id: "9762:2036",
    key: ".IconBookmarkSquareSolid",
  },
  ".IconShareSolid": {
    name: ".IconShareSolid",
    id: "9762:2038",
    key: ".IconShareSolid",
  },
  ".IconArrowLeftSolid": {
    name: ".IconArrowLeftSolid",
    id: "9762:2040",
    key: ".IconArrowLeftSolid",
  },
  ".IconBriefcaseSolid": {
    name: ".IconBriefcaseSolid",
    id: "9762:2042",
    key: ".IconBriefcaseSolid",
  },
  ".IconCurrencyYenSolid": {
    name: ".IconCurrencyYenSolid",
    id: "9762:2044",
    key: ".IconCurrencyYenSolid",
  },
  ".IconLanguageSolid": {
    name: ".IconLanguageSolid",
    id: "9762:2046",
    key: ".IconLanguageSolid",
  },
  ".IconShieldCheckSolid": {
    name: ".IconShieldCheckSolid",
    id: "9762:2048",
    key: ".IconShieldCheckSolid",
  },
  ".IconArrowLeftCircleSolid": {
    name: ".IconArrowLeftCircleSolid",
    id: "9762:2050",
    key: ".IconArrowLeftCircleSolid",
  },
  ".IconBugAntSolid": {
    name: ".IconBugAntSolid",
    id: "9762:2052",
    key: ".IconBugAntSolid",
  },
  ".IconCursorArrowRaysSolid": {
    name: ".IconCursorArrowRaysSolid",
    id: "9762:2054",
    key: ".IconCursorArrowRaysSolid",
  },
  ".IconLifebuoySolid": {
    name: ".IconLifebuoySolid",
    id: "9762:2056",
    key: ".IconLifebuoySolid",
  },
  ".IconShieldExclamationSolid": {
    name: ".IconShieldExclamationSolid",
    id: "9762:2058",
    key: ".IconShieldExclamationSolid",
  },
  ".IconArrowLeftEndOnRectangleSolid": {
    name: ".IconArrowLeftEndOnRectangleSolid",
    id: "9762:2060",
    key: ".IconArrowLeftEndOnRectangleSolid",
  },
  ".IconBuildingLibrarySolid": {
    name: ".IconBuildingLibrarySolid",
    id: "9762:2062",
    key: ".IconBuildingLibrarySolid",
  },
  ".IconCursorArrowRippleSolid": {
    name: ".IconCursorArrowRippleSolid",
    id: "9762:2064",
    key: ".IconCursorArrowRippleSolid",
  },
  ".IconArrowLeftStartOnRectangleSolid": {
    name: ".IconArrowLeftStartOnRectangleSolid",
    id: "9762:2066",
    key: ".IconArrowLeftStartOnRectangleSolid",
  },
  ".IconBuildingOfficeSolid": {
    name: ".IconBuildingOfficeSolid",
    id: "9762:2068",
    key: ".IconBuildingOfficeSolid",
  },
  ".IconDevicePhoneMobileSolid": {
    name: ".IconDevicePhoneMobileSolid",
    id: "9762:2070",
    key: ".IconDevicePhoneMobileSolid",
  },
  ".IconLinkSolid": {
    name: ".IconLinkSolid",
    id: "9762:2072",
    key: ".IconLinkSolid",
  },
  ".IconShoppingCartSolid": {
    name: ".IconShoppingCartSolid",
    id: "9762:2074",
    key: ".IconShoppingCartSolid",
  },
  ".IconArrowLongDownSolid": {
    name: ".IconArrowLongDownSolid",
    id: "9762:2076",
    key: ".IconArrowLongDownSolid",
  },
  ".IconBuildingOffice2Solid": {
    name: ".IconBuildingOffice2Solid",
    id: "9762:2078",
    key: ".IconBuildingOffice2Solid",
  },
  ".IconDeviceTabletSolid": {
    name: ".IconDeviceTabletSolid",
    id: "9762:2080",
    key: ".IconDeviceTabletSolid",
  },
  ".IconListBulletSolid": {
    name: ".IconListBulletSolid",
    id: "9762:2082",
    key: ".IconListBulletSolid",
  },
  ".IconSignalSolid": {
    name: ".IconSignalSolid",
    id: "9762:2084",
    key: ".IconSignalSolid",
  },
  ".IconArrowLongLeftSolid": {
    name: ".IconArrowLongLeftSolid",
    id: "9762:2086",
    key: ".IconArrowLongLeftSolid",
  },
  ".IconBuildingStorefrontSolid": {
    name: ".IconBuildingStorefrontSolid",
    id: "9762:2088",
    key: ".IconBuildingStorefrontSolid",
  },
  ".IconDocumentSolid": {
    name: ".IconDocumentSolid",
    id: "9762:2090",
    key: ".IconDocumentSolid",
  },
  ".IconLockClosedSolid": {
    name: ".IconLockClosedSolid",
    id: "9762:2092",
    key: ".IconLockClosedSolid",
  },
  ".IconCakeSolid": {
    name: ".IconCakeSolid",
    id: "9762:2094",
    key: ".IconCakeSolid",
  },
  ".IconDocumentArrowDownSolid": {
    name: ".IconDocumentArrowDownSolid",
    id: "9762:2096",
    key: ".IconDocumentArrowDownSolid",
  },
  ".IconLockOpenSolid": {
    name: ".IconLockOpenSolid",
    id: "9762:2098",
    key: ".IconLockOpenSolid",
  },
  ".IconSparklesSolid": {
    name: ".IconSparklesSolid",
    id: "9762:2100",
    key: ".IconSparklesSolid",
  },
  ".IconArrowLongUpSolid": {
    name: ".IconArrowLongUpSolid",
    id: "9762:2102",
    key: ".IconArrowLongUpSolid",
  },
  ".IconCalculatorSolid": {
    name: ".IconCalculatorSolid",
    id: "9762:2104",
    key: ".IconCalculatorSolid",
  },
  ".IconDocumentArrowUpSolid": {
    name: ".IconDocumentArrowUpSolid",
    id: "9762:2106",
    key: ".IconDocumentArrowUpSolid",
  },
  ".IconMagnifyingGlassSolid": {
    name: ".IconMagnifyingGlassSolid",
    id: "9762:2108",
    key: ".IconMagnifyingGlassSolid",
  },
  ".IconSpeakerWaveSolid": {
    name: ".IconSpeakerWaveSolid",
    id: "9762:2110",
    key: ".IconSpeakerWaveSolid",
  },
  ".IconArrowPathSolid": {
    name: ".IconArrowPathSolid",
    id: "9762:2112",
    key: ".IconArrowPathSolid",
  },
  ".IconCalendarSolid": {
    name: ".IconCalendarSolid",
    id: "9762:2114",
    key: ".IconCalendarSolid",
  },
  ".IconDocumentChartBarSolid": {
    name: ".IconDocumentChartBarSolid",
    id: "9762:2116",
    key: ".IconDocumentChartBarSolid",
  },
  ".IconMagnifyingGlassCircleSolid": {
    name: ".IconMagnifyingGlassCircleSolid",
    id: "9762:2118",
    key: ".IconMagnifyingGlassCircleSolid",
  },
  ".IconSpeakerXMarkSolid": {
    name: ".IconSpeakerXMarkSolid",
    id: "9762:2120",
    key: ".IconSpeakerXMarkSolid",
  },
  ".IconDocumentCheckSolid": {
    name: ".IconDocumentCheckSolid",
    id: "9762:2122",
    key: ".IconDocumentCheckSolid",
  },
  ".IconMagnifyingGlassMinusSolid": {
    name: ".IconMagnifyingGlassMinusSolid",
    id: "9762:2124",
    key: ".IconMagnifyingGlassMinusSolid",
  },
  ".IconSquare2StackSolid": {
    name: ".IconSquare2StackSolid",
    id: "9762:2126",
    key: ".IconSquare2StackSolid",
  },
  ".IconArrowRightSolid": {
    name: ".IconArrowRightSolid",
    id: "9762:2128",
    key: ".IconArrowRightSolid",
  },
  ".IconCameraSolid": {
    name: ".IconCameraSolid",
    id: "9762:2130",
    key: ".IconCameraSolid",
  },
  ".IconDocumentDuplicateSolid": {
    name: ".IconDocumentDuplicateSolid",
    id: "9762:2132",
    key: ".IconDocumentDuplicateSolid",
  },
  ".IconMagnifyingGlassPlusSolid": {
    name: ".IconMagnifyingGlassPlusSolid",
    id: "9762:2134",
    key: ".IconMagnifyingGlassPlusSolid",
  },
  ".IconSquares2X2Solid": {
    name: ".IconSquares2X2Solid",
    id: "9762:2136",
    key: ".IconSquares2X2Solid",
  },
  ".IconArrowRightCircleSolid": {
    name: ".IconArrowRightCircleSolid",
    id: "9762:2138",
    key: ".IconArrowRightCircleSolid",
  },
  ".IconChartBarSolid": {
    name: ".IconChartBarSolid",
    id: "9762:2140",
    key: ".IconChartBarSolid",
  },
  ".IconDocumentMagnifyingGlassSolid": {
    name: ".IconDocumentMagnifyingGlassSolid",
    id: "9762:2142",
    key: ".IconDocumentMagnifyingGlassSolid",
  },
  ".IconMapSolid": {
    name: ".IconMapSolid",
    id: "9762:2144",
    key: ".IconMapSolid",
  },
  ".IconSquaresPlusSolid": {
    name: ".IconSquaresPlusSolid",
    id: "9762:2146",
    key: ".IconSquaresPlusSolid",
  },
  ".IconArrowRightEndOnRectangleSolid": {
    name: ".IconArrowRightEndOnRectangleSolid",
    id: "9762:2148",
    key: ".IconArrowRightEndOnRectangleSolid",
  },
  ".IconMapPinSolid": {
    name: ".IconMapPinSolid",
    id: "9762:2150",
    key: ".IconMapPinSolid",
  },
  ".IconSquare3Stack3DSolid": {
    name: ".IconSquare3Stack3DSolid",
    id: "9762:2152",
    key: ".IconSquare3Stack3DSolid",
  },
  ".IconArrowRightStartOnRectangleSolid": {
    name: ".IconArrowRightStartOnRectangleSolid",
    id: "9762:2154",
    key: ".IconArrowRightStartOnRectangleSolid",
  },
  ".IconChartPieSolid": {
    name: ".IconChartPieSolid",
    id: "9762:2156",
    key: ".IconChartPieSolid",
  },
  ".IconDocumentPlusSolid": {
    name: ".IconDocumentPlusSolid",
    id: "9762:2158",
    key: ".IconDocumentPlusSolid",
  },
  ".IconMegaphoneSolid": {
    name: ".IconMegaphoneSolid",
    id: "9762:2160",
    key: ".IconMegaphoneSolid",
  },
  ".IconStarSolid": {
    name: ".IconStarSolid",
    id: "9762:2162",
    key: ".IconStarSolid",
  },
  ".IconArrowTopRightOnSquareSolid": {
    name: ".IconArrowTopRightOnSquareSolid",
    id: "9762:2164",
    key: ".IconArrowTopRightOnSquareSolid",
  },
  ".IconChatBubbleBottomCenterSolid": {
    name: ".IconChatBubbleBottomCenterSolid",
    id: "9762:2166",
    key: ".IconChatBubbleBottomCenterSolid",
  },
  ".IconDocumentTextSolid": {
    name: ".IconDocumentTextSolid",
    id: "9762:2168",
    key: ".IconDocumentTextSolid",
  },
  ".IconMicrophoneSolid": {
    name: ".IconMicrophoneSolid",
    id: "9762:2170",
    key: ".IconMicrophoneSolid",
  },
  ".IconStopSolid": {
    name: ".IconStopSolid",
    id: "9762:2172",
    key: ".IconStopSolid",
  },
  ".IconArrowTrendingDownSolid": {
    name: ".IconArrowTrendingDownSolid",
    id: "9762:2174",
    key: ".IconArrowTrendingDownSolid",
  },
  ".IconChatBubbleBottomCenterTextSolid": {
    name: ".IconChatBubbleBottomCenterTextSolid",
    id: "9762:2176",
    key: ".IconChatBubbleBottomCenterTextSolid",
  },
  ".IconStopCircleSolid": {
    name: ".IconStopCircleSolid",
    id: "9762:2178",
    key: ".IconStopCircleSolid",
  },
  ".IconArrowTrendingUpSolid": {
    name: ".IconArrowTrendingUpSolid",
    id: "9762:2180",
    key: ".IconArrowTrendingUpSolid",
  },
  ".IconChatBubbleLeftSolid": {
    name: ".IconChatBubbleLeftSolid",
    id: "9762:2182",
    key: ".IconChatBubbleLeftSolid",
  },
  ".IconEllipsisHorizontalCircleSolid": {
    name: ".IconEllipsisHorizontalCircleSolid",
    id: "9762:2184",
    key: ".IconEllipsisHorizontalCircleSolid",
  },
  ".IconMinusCircleSolid": {
    name: ".IconMinusCircleSolid",
    id: "9762:2186",
    key: ".IconMinusCircleSolid",
  },
  ".IconSunSolid": {
    name: ".IconSunSolid",
    id: "9762:2188",
    key: ".IconSunSolid",
  },
  ".IconArrowUpSolid": {
    name: ".IconArrowUpSolid",
    id: "9762:2190",
    key: ".IconArrowUpSolid",
  },
  ".IconChatBubbleLeftEllipsisSolid": {
    name: ".IconChatBubbleLeftEllipsisSolid",
    id: "9762:2192",
    key: ".IconChatBubbleLeftEllipsisSolid",
  },
  ".IconEllipsisVerticalSolid": {
    name: ".IconEllipsisVerticalSolid",
    id: "9762:2194",
    key: ".IconEllipsisVerticalSolid",
  },
  ".IconMoonSolid": {
    name: ".IconMoonSolid",
    id: "9762:2196",
    key: ".IconMoonSolid",
  },
  ".IconSwatchSolid": {
    name: ".IconSwatchSolid",
    id: "9762:2198",
    key: ".IconSwatchSolid",
  },
  ".IconArrowUpCircleSolid": {
    name: ".IconArrowUpCircleSolid",
    id: "9762:2200",
    key: ".IconArrowUpCircleSolid",
  },
  ".IconChatBubbleLeftRightSolid": {
    name: ".IconChatBubbleLeftRightSolid",
    id: "9762:2202",
    key: ".IconChatBubbleLeftRightSolid",
  },
  ".IconEnvelopeSolid": {
    name: ".IconEnvelopeSolid",
    id: "9762:2204",
    key: ".IconEnvelopeSolid",
  },
  ".IconArrowUpLeftSolid": {
    name: ".IconArrowUpLeftSolid",
    id: "9762:2206",
    key: ".IconArrowUpLeftSolid",
  },
  ".IconChatBubbleOvalLeftSolid": {
    name: ".IconChatBubbleOvalLeftSolid",
    id: "9762:2208",
    key: ".IconChatBubbleOvalLeftSolid",
  },
  ".IconEnvelopeOpenSolid": {
    name: ".IconEnvelopeOpenSolid",
    id: "9762:2210",
    key: ".IconEnvelopeOpenSolid",
  },
  ".IconNewspaperSolid": {
    name: ".IconNewspaperSolid",
    id: "9762:2212",
    key: ".IconNewspaperSolid",
  },
  ".IconTagSolid": {
    name: ".IconTagSolid",
    id: "9762:2214",
    key: ".IconTagSolid",
  },
  ".IconArrowUpOnSquareSolid": {
    name: ".IconArrowUpOnSquareSolid",
    id: "9762:2216",
    key: ".IconArrowUpOnSquareSolid",
  },
  ".IconChatBubbleOvalLeftEllipsisSolid": {
    name: ".IconChatBubbleOvalLeftEllipsisSolid",
    id: "9762:2218",
    key: ".IconChatBubbleOvalLeftEllipsisSolid",
  },
  ".IconExclamationCircleSolid": {
    name: ".IconExclamationCircleSolid",
    id: "9762:2220",
    key: ".IconExclamationCircleSolid",
  },
  ".IconNoSymbolSolid": {
    name: ".IconNoSymbolSolid",
    id: "9762:2222",
    key: ".IconNoSymbolSolid",
  },
  ".IconTicketSolid": {
    name: ".IconTicketSolid",
    id: "9762:2224",
    key: ".IconTicketSolid",
  },
  ".IconArrowUpOnSquareStackSolid": {
    name: ".IconArrowUpOnSquareStackSolid",
    id: "9762:2226",
    key: ".IconArrowUpOnSquareStackSolid",
  },
  ".IconCheckSolid": {
    name: ".IconCheckSolid",
    id: "9762:2228",
    key: ".IconCheckSolid",
  },
  ".IconExclamationTriangleSolid": {
    name: ".IconExclamationTriangleSolid",
    id: "9762:2230",
    key: ".IconExclamationTriangleSolid",
  },
  ".IconPaintBrushSolid": {
    name: ".IconPaintBrushSolid",
    id: "9762:2232",
    key: ".IconPaintBrushSolid",
  },
  ".IconCheckTagSolid": {
    name: ".IconCheckTagSolid",
    id: "9762:2234",
    key: ".IconCheckTagSolid",
  },
  ".IconEyeSolid": {
    name: ".IconEyeSolid",
    id: "9762:2236",
    key: ".IconEyeSolid",
  },
  ".IconPaperAirplaneSolid": {
    name: ".IconPaperAirplaneSolid",
    id: "9762:2238",
    key: ".IconPaperAirplaneSolid",
  },
  ".IconTrophySolid": {
    name: ".IconTrophySolid",
    id: "9762:2240",
    key: ".IconTrophySolid",
  },
  ".IconArrowUpTraySolid": {
    name: ".IconArrowUpTraySolid",
    id: "9762:2242",
    key: ".IconArrowUpTraySolid",
  },
  ".IconCheckCircleSolid": {
    name: ".IconCheckCircleSolid",
    id: "9762:2244",
    key: ".IconCheckCircleSolid",
  },
  ".IconEyeDropperSolid": {
    name: ".IconEyeDropperSolid",
    id: "9762:2246",
    key: ".IconEyeDropperSolid",
  },
  ".IconPaperClipSolid": {
    name: ".IconPaperClipSolid",
    id: "9762:2248",
    key: ".IconPaperClipSolid",
  },
  ".IconTruckSolid": {
    name: ".IconTruckSolid",
    id: "9762:2250",
    key: ".IconTruckSolid",
  },
  ".IconArrowUturnDownSolid": {
    name: ".IconArrowUturnDownSolid",
    id: "9762:2252",
    key: ".IconArrowUturnDownSolid",
  },
  ".IconChevronDoubleDownSolid": {
    name: ".IconChevronDoubleDownSolid",
    id: "9762:2254",
    key: ".IconChevronDoubleDownSolid",
  },
  ".IconEyeSlashSolid": {
    name: ".IconEyeSlashSolid",
    id: "9762:2256",
    key: ".IconEyeSlashSolid",
  },
  ".IconPauseSolid": {
    name: ".IconPauseSolid",
    id: "9762:2258",
    key: ".IconPauseSolid",
  },
  ".IconTvSolid": {
    name: ".IconTvSolid",
    id: "9762:2260",
    key: ".IconTvSolid",
  },
  ".IconFaceFrownSolid": {
    name: ".IconFaceFrownSolid",
    id: "9762:2262",
    key: ".IconFaceFrownSolid",
  },
  ".IconPauseCircleSolid": {
    name: ".IconPauseCircleSolid",
    id: "9762:2264",
    key: ".IconPauseCircleSolid",
  },
  ".IconUserSolid": {
    name: ".IconUserSolid",
    id: "9762:2266",
    key: ".IconUserSolid",
  },
  ".IconArrowUturnRightSolid": {
    name: ".IconArrowUturnRightSolid",
    id: "9762:2268",
    key: ".IconArrowUturnRightSolid",
  },
  ".IconChevronDoubleRightSolid": {
    name: ".IconChevronDoubleRightSolid",
    id: "9762:2270",
    key: ".IconChevronDoubleRightSolid",
  },
  ".IconFaceSmileSolid": {
    name: ".IconFaceSmileSolid",
    id: "9762:2272",
    key: ".IconFaceSmileSolid",
  },
  ".IconPencilSolid": {
    name: ".IconPencilSolid",
    id: "9762:2274",
    key: ".IconPencilSolid",
  },
  ".IconUserCircleSolid": {
    name: ".IconUserCircleSolid",
    id: "9762:2276",
    key: ".IconUserCircleSolid",
  },
  ".IconArrowUturnUpSolid": {
    name: ".IconArrowUturnUpSolid",
    id: "9762:2278",
    key: ".IconArrowUturnUpSolid",
  },
  ".IconChevronDoubleUpSolid": {
    name: ".IconChevronDoubleUpSolid",
    id: "9762:2280",
    key: ".IconChevronDoubleUpSolid",
  },
  ".IconFilmSolid": {
    name: ".IconFilmSolid",
    id: "9762:2282",
    key: ".IconFilmSolid",
  },
  ".IconPencilSquareSolid": {
    name: ".IconPencilSquareSolid",
    id: "9762:2284",
    key: ".IconPencilSquareSolid",
  },
  ".IconUserGroupSolid": {
    name: ".IconUserGroupSolid",
    id: "9762:2286",
    key: ".IconUserGroupSolid",
  },
  ".IconArrowsPointingInSolid": {
    name: ".IconArrowsPointingInSolid",
    id: "9762:2288",
    key: ".IconArrowsPointingInSolid",
  },
  ".IconPhoneSolid": {
    name: ".IconPhoneSolid",
    id: "9762:2290",
    key: ".IconPhoneSolid",
  },
  ".IconUserMinusSolid": {
    name: ".IconUserMinusSolid",
    id: "9762:2292",
    key: ".IconUserMinusSolid",
  },
  ".IconArrowsPointingOutSolid": {
    name: ".IconArrowsPointingOutSolid",
    id: "9762:2294",
    key: ".IconArrowsPointingOutSolid",
  },
  ".IconChevronLeftSolid": {
    name: ".IconChevronLeftSolid",
    id: "9762:2296",
    key: ".IconChevronLeftSolid",
  },
  ".IconFireSolid": {
    name: ".IconFireSolid",
    id: "9762:2298",
    key: ".IconFireSolid",
  },
  ".IconPhoneArrowDownLeftSolid": {
    name: ".IconPhoneArrowDownLeftSolid",
    id: "9762:2300",
    key: ".IconPhoneArrowDownLeftSolid",
  },
  ".IconUserPlusSolid": {
    name: ".IconUserPlusSolid",
    id: "9762:2302",
    key: ".IconUserPlusSolid",
  },
  ".IconArrowsRightLeftSolid": {
    name: ".IconArrowsRightLeftSolid",
    id: "9762:2304",
    key: ".IconArrowsRightLeftSolid",
  },
  ".IconChevronRightSolid": {
    name: ".IconChevronRightSolid",
    id: "9762:2306",
    key: ".IconChevronRightSolid",
  },
  ".IconFlagSolid": {
    name: ".IconFlagSolid",
    id: "9762:2308",
    key: ".IconFlagSolid",
  },
  ".IconPhoneArrowUpRightSolid": {
    name: ".IconPhoneArrowUpRightSolid",
    id: "9762:2310",
    key: ".IconPhoneArrowUpRightSolid",
  },
  ".IconUsersSolid": {
    name: ".IconUsersSolid",
    id: "9762:2312",
    key: ".IconUsersSolid",
  },
  ".IconArrowsUpDownSolid": {
    name: ".IconArrowsUpDownSolid",
    id: "9762:2314",
    key: ".IconArrowsUpDownSolid",
  },
  ".IconChevronUpSolid": {
    name: ".IconChevronUpSolid",
    id: "9762:2316",
    key: ".IconChevronUpSolid",
  },
  ".IconVariableSolid": {
    name: ".IconVariableSolid",
    id: "9762:2318",
    key: ".IconVariableSolid",
  },
  ".IconAtSymbolSolid": {
    name: ".IconAtSymbolSolid",
    id: "9762:2320",
    key: ".IconAtSymbolSolid",
  },
  ".IconChevronUpDownSolid": {
    name: ".IconChevronUpDownSolid",
    id: "9762:2322",
    key: ".IconChevronUpDownSolid",
  },
  ".IconFolderArrowDownSolid": {
    name: ".IconFolderArrowDownSolid",
    id: "9762:2324",
    key: ".IconFolderArrowDownSolid",
  },
  ".IconPhotoSolid": {
    name: ".IconPhotoSolid",
    id: "9762:2326",
    key: ".IconPhotoSolid",
  },
  ".IconVideoCameraSolid": {
    name: ".IconVideoCameraSolid",
    id: "9762:2328",
    key: ".IconVideoCameraSolid",
  },
  ".IconBackspaceSolid": {
    name: ".IconBackspaceSolid",
    id: "9762:2330",
    key: ".IconBackspaceSolid",
  },
  ".IconCircleStackSolid": {
    name: ".IconCircleStackSolid",
    id: "9762:2332",
    key: ".IconCircleStackSolid",
  },
  ".IconFolderMinusSolid": {
    name: ".IconFolderMinusSolid",
    id: "9762:2334",
    key: ".IconFolderMinusSolid",
  },
  ".IconPlaySolid": {
    name: ".IconPlaySolid",
    id: "9762:2336",
    key: ".IconPlaySolid",
  },
  ".IconVideoCameraSlashSolid": {
    name: ".IconVideoCameraSlashSolid",
    id: "9762:2338",
    key: ".IconVideoCameraSlashSolid",
  },
  ".IconBackwardSolid": {
    name: ".IconBackwardSolid",
    id: "9762:2340",
    key: ".IconBackwardSolid",
  },
  ".IconClipboardSolid": {
    name: ".IconClipboardSolid",
    id: "9762:2342",
    key: ".IconClipboardSolid",
  },
  ".IconFolderOpenSolid": {
    name: ".IconFolderOpenSolid",
    id: "9762:2344",
    key: ".IconFolderOpenSolid",
  },
  ".IconBanknotesSolid": {
    name: ".IconBanknotesSolid",
    id: "9762:2346",
    key: ".IconBanknotesSolid",
  },
  ".IconClipboardDocumentSolid": {
    name: ".IconClipboardDocumentSolid",
    id: "9762:2348",
    key: ".IconClipboardDocumentSolid",
  },
  ".IconFolderPlusSolid": {
    name: ".IconFolderPlusSolid",
    id: "9762:2350",
    key: ".IconFolderPlusSolid",
  },
  ".IconPlayPauseSolid": {
    name: ".IconPlayPauseSolid",
    id: "9762:2352",
    key: ".IconPlayPauseSolid",
  },
  ".IconViewfinderCircleSolid": {
    name: ".IconViewfinderCircleSolid",
    id: "9762:2354",
    key: ".IconViewfinderCircleSolid",
  },
  ".IconBars2Solid": {
    name: ".IconBars2Solid",
    id: "9762:2356",
    key: ".IconBars2Solid",
  },
  ".IconClipboardDocumentCheckSolid": {
    name: ".IconClipboardDocumentCheckSolid",
    id: "9762:2358",
    key: ".IconClipboardDocumentCheckSolid",
  },
  ".IconForwardSolid": {
    name: ".IconForwardSolid",
    id: "9762:2360",
    key: ".IconForwardSolid",
  },
  ".IconPlusSolid": {
    name: ".IconPlusSolid",
    id: "9762:2362",
    key: ".IconPlusSolid",
  },
  ".IconWalletSolid": {
    name: ".IconWalletSolid",
    id: "9762:2364",
    key: ".IconWalletSolid",
  },
  ".IconBars3Solid": {
    name: ".IconBars3Solid",
    id: "9762:2366",
    key: ".IconBars3Solid",
  },
  ".IconClipboardDocumentListSolid": {
    name: ".IconClipboardDocumentListSolid",
    id: "9762:2368",
    key: ".IconClipboardDocumentListSolid",
  },
  ".IconFunnelSolid": {
    name: ".IconFunnelSolid",
    id: "9762:2370",
    key: ".IconFunnelSolid",
  },
  ".IconPlusCircleSolid": {
    name: ".IconPlusCircleSolid",
    id: "9762:2372",
    key: ".IconPlusCircleSolid",
  },
  ".IconClockSolid": {
    name: ".IconClockSolid",
    id: "9762:2374",
    key: ".IconClockSolid",
  },
  ".IconGifSolid": {
    name: ".IconGifSolid",
    id: "9762:2376",
    key: ".IconGifSolid",
  },
  ".IconPowerSolid": {
    name: ".IconPowerSolid",
    id: "9762:2378",
    key: ".IconPowerSolid",
  },
  ".IconWindowSolid": {
    name: ".IconWindowSolid",
    id: "9762:2380",
    key: ".IconWindowSolid",
  },
  ".IconBars3BottomRightSolid": {
    name: ".IconBars3BottomRightSolid",
    id: "9762:2382",
    key: ".IconBars3BottomRightSolid",
  },
  ".IconCloudSolid": {
    name: ".IconCloudSolid",
    id: "9762:2384",
    key: ".IconCloudSolid",
  },
  ".IconGiftSolid": {
    name: ".IconGiftSolid",
    id: "9762:2386",
    key: ".IconGiftSolid",
  },
  ".IconPresentationChartBarSolid": {
    name: ".IconPresentationChartBarSolid",
    id: "9762:2388",
    key: ".IconPresentationChartBarSolid",
  },
  ".IconWrenchSolid": {
    name: ".IconWrenchSolid",
    id: "9762:2390",
    key: ".IconWrenchSolid",
  },
  ".IconBars3CenterLeftSolid": {
    name: ".IconBars3CenterLeftSolid",
    id: "9762:2392",
    key: ".IconBars3CenterLeftSolid",
  },
  ".IconCloudArrowDownSolid": {
    name: ".IconCloudArrowDownSolid",
    id: "9762:2394",
    key: ".IconCloudArrowDownSolid",
  },
  ".IconGiftTopSolid": {
    name: ".IconGiftTopSolid",
    id: "9762:2396",
    key: ".IconGiftTopSolid",
  },
  ".IconPresentationChartLineSolid": {
    name: ".IconPresentationChartLineSolid",
    id: "9762:2398",
    key: ".IconPresentationChartLineSolid",
  },
  ".IconWrenchScrewdriverSolid": {
    name: ".IconWrenchScrewdriverSolid",
    id: "9762:2400",
    key: ".IconWrenchScrewdriverSolid",
  },
  ".IconGlobeAltSolid": {
    name: ".IconGlobeAltSolid",
    id: "9762:2402",
    key: ".IconGlobeAltSolid",
  },
  ".IconPrinterSolid": {
    name: ".IconPrinterSolid",
    id: "9762:2404",
    key: ".IconPrinterSolid",
  },
  ".IconXCircleSolid": {
    name: ".IconXCircleSolid",
    id: "9762:2406",
    key: ".IconXCircleSolid",
  },
  ".IconBarsArrowDownSolid": {
    name: ".IconBarsArrowDownSolid",
    id: "9762:2408",
    key: ".IconBarsArrowDownSolid",
  },
  ".IconCodeBracketSolid": {
    name: ".IconCodeBracketSolid",
    id: "9762:2410",
    key: ".IconCodeBracketSolid",
  },
  ".IconGlobeAmericasSolid": {
    name: ".IconGlobeAmericasSolid",
    id: "9762:2412",
    key: ".IconGlobeAmericasSolid",
  },
  ".IconPuzzlePieceSolid": {
    name: ".IconPuzzlePieceSolid",
    id: "9762:2414",
    key: ".IconPuzzlePieceSolid",
  },
  ".IconXMarkSolid": {
    name: ".IconXMarkSolid",
    id: "9762:2416",
    key: ".IconXMarkSolid",
  },
  ".IconBarsArrowUpSolid": {
    name: ".IconBarsArrowUpSolid",
    id: "9762:2418",
    key: ".IconBarsArrowUpSolid",
  },
  ".IconCodeBracketSquareSolid": {
    name: ".IconCodeBracketSquareSolid",
    id: "9762:2420",
    key: ".IconCodeBracketSquareSolid",
  },
  ".IconGlobeAsiaAustraliaSolid": {
    name: ".IconGlobeAsiaAustraliaSolid",
    id: "9762:2422",
    key: ".IconGlobeAsiaAustraliaSolid",
  },
  ".IconQrCodeSolid": {
    name: ".IconQrCodeSolid",
    id: "9762:2424",
    key: ".IconQrCodeSolid",
  },
  ".IconBattery0Solid": {
    name: ".IconBattery0Solid",
    id: "9762:2426",
    key: ".IconBattery0Solid",
  },
  ".IconCogSolid": {
    name: ".IconCogSolid",
    id: "9762:2428",
    key: ".IconCogSolid",
  },
  ".IconReceiptPercentSolid": {
    name: ".IconReceiptPercentSolid",
    id: "9762:2430",
    key: ".IconReceiptPercentSolid",
  },
  ".IconArchiveBoxSolid": {
    name: ".IconArchiveBoxSolid",
    id: "9762:2432",
    key: ".IconArchiveBoxSolid",
  },
  ".IconArrowDownSolid": {
    name: ".IconArrowDownSolid",
    id: "9762:2434",
    key: ".IconArrowDownSolid",
  },
  ".IconBellSnoozeSolid": {
    name: ".IconBellSnoozeSolid",
    id: "9762:2436",
    key: ".IconBellSnoozeSolid",
  },
  ".IconBookOpenSolid": {
    name: ".IconBookOpenSolid",
    id: "9762:2438",
    key: ".IconBookOpenSolid",
  },
  ".IconCurrencyDollarSolid": {
    name: ".IconCurrencyDollarSolid",
    id: "9762:2440",
    key: ".IconCurrencyDollarSolid",
  },
  ".IconCurrencyRupeeSolid": {
    name: ".IconCurrencyRupeeSolid",
    id: "9762:2442",
    key: ".IconCurrencyRupeeSolid",
  },
  ".IconKeySolid": {
    name: ".IconKeySolid",
    id: "9762:2444",
    key: ".IconKeySolid",
  },
  ".IconLightBulbSolid": {
    name: ".IconLightBulbSolid",
    id: "9762:2446",
    key: ".IconLightBulbSolid",
  },
  ".IconShoppingBagSolid": {
    name: ".IconShoppingBagSolid",
    id: "9762:2448",
    key: ".IconShoppingBagSolid",
  },
  ".IconSignalSlashSolid": {
    name: ".IconSignalSlashSolid",
    id: "9762:2450",
    key: ".IconSignalSlashSolid",
  },
  ".IconArrowLongRightSolid": {
    name: ".IconArrowLongRightSolid",
    id: "9762:2452",
    key: ".IconArrowLongRightSolid",
  },
  ".IconArrowPathRoundedSquareSolid": {
    name: ".IconArrowPathRoundedSquareSolid",
    id: "9762:2454",
    key: ".IconArrowPathRoundedSquareSolid",
  },
  ".IconCalendarDaysSolid": {
    name: ".IconCalendarDaysSolid",
    id: "9762:2456",
    key: ".IconCalendarDaysSolid",
  },
  ".IconChartBarSquareSolid": {
    name: ".IconChartBarSquareSolid",
    id: "9762:2458",
    key: ".IconChartBarSquareSolid",
  },
  ".IconDocumentMinusSolid": {
    name: ".IconDocumentMinusSolid",
    id: "9762:2460",
    key: ".IconDocumentMinusSolid",
  },
  ".IconEllipsisHorizontalSolid": {
    name: ".IconEllipsisHorizontalSolid",
    id: "9762:2462",
    key: ".IconEllipsisHorizontalSolid",
  },
  ".IconMinusSolid": {
    name: ".IconMinusSolid",
    id: "9762:2464",
    key: ".IconMinusSolid",
  },
  ".IconMusicalNoteSolid": {
    name: ".IconMusicalNoteSolid",
    id: "9762:2466",
    key: ".IconMusicalNoteSolid",
  },
  ".IconTableCellsSolid": {
    name: ".IconTableCellsSolid",
    id: "9762:2468",
    key: ".IconTableCellsSolid",
  },
  ".IconTrashSolid": {
    name: ".IconTrashSolid",
    id: "9762:2470",
    key: ".IconTrashSolid",
  },
  ".IconArrowUpRightSolid": {
    name: ".IconArrowUpRightSolid",
    id: "9762:2472",
    key: ".IconArrowUpRightSolid",
  },
  ".IconArrowUturnLeftSolid": {
    name: ".IconArrowUturnLeftSolid",
    id: "9762:2474",
    key: ".IconArrowUturnLeftSolid",
  },
  ".IconChevronDoubleLeftSolid": {
    name: ".IconChevronDoubleLeftSolid",
    id: "9762:2476",
    key: ".IconChevronDoubleLeftSolid",
  },
  ".IconChevronDownSolid": {
    name: ".IconChevronDownSolid",
    id: "9762:2478",
    key: ".IconChevronDownSolid",
  },
  ".IconFingerPrintSolid": {
    name: ".IconFingerPrintSolid",
    id: "9762:2480",
    key: ".IconFingerPrintSolid",
  },
  ".IconFolderSolid": {
    name: ".IconFolderSolid",
    id: "9762:2482",
    key: ".IconFolderSolid",
  },
  ".IconPhoneXMarkSolid": {
    name: ".IconPhoneXMarkSolid",
    id: "9762:2484",
    key: ".IconPhoneXMarkSolid",
  },
  ".IconPlayCircleSolid": {
    name: ".IconPlayCircleSolid",
    id: "9762:2486",
    key: ".IconPlayCircleSolid",
  },
  ".IconViewColumnsSolid": {
    name: ".IconViewColumnsSolid",
    id: "9762:2488",
    key: ".IconViewColumnsSolid",
  },
  ".IconWifiSolid": {
    name: ".IconWifiSolid",
    id: "9762:2490",
    key: ".IconWifiSolid",
  },
  ".IconBars3BottomLeftSolid": {
    name: ".IconBars3BottomLeftSolid",
    id: "9762:2492",
    key: ".IconBars3BottomLeftSolid",
  },
  ".IconBars4Solid": {
    name: ".IconBars4Solid",
    id: "9762:2494",
    key: ".IconBars4Solid",
  },
  ".IconCloudArrowUpSolid": {
    name: ".IconCloudArrowUpSolid",
    id: "9762:2496",
    key: ".IconCloudArrowUpSolid",
  },
  ".IconGlobeEuropeAfricaSolid": {
    name: ".IconGlobeEuropeAfricaSolid",
    id: "9762:2498",
    key: ".IconGlobeEuropeAfricaSolid",
  },
  ".IconQuestionMarkCircleSolid": {
    name: ".IconQuestionMarkCircleSolid",
    id: "9762:2500",
    key: ".IconQuestionMarkCircleSolid",
  },
  ".IconAcademicCapOutline": {
    name: ".IconAcademicCapOutline",
    id: "9762:2503",
    key: ".IconAcademicCapOutline",
  },
  ".IconBattery100Outline": {
    name: ".IconBattery100Outline",
    id: "9762:2505",
    key: ".IconBattery100Outline",
  },
  ".IconCog6ToothOutline": {
    name: ".IconCog6ToothOutline",
    id: "9762:2507",
    key: ".IconCog6ToothOutline",
  },
  ".IconHandRaisedOutline": {
    name: ".IconHandRaisedOutline",
    id: "9762:2509",
    key: ".IconHandRaisedOutline",
  },
  ".IconQueueListOutline": {
    name: ".IconQueueListOutline",
    id: "9762:2511",
    key: ".IconQueueListOutline",
  },
  ".IconAdjustmentsHorizontalOutline": {
    name: ".IconAdjustmentsHorizontalOutline",
    id: "9762:2513",
    key: ".IconAdjustmentsHorizontalOutline",
  },
  ".IconBattery50Outline": {
    name: ".IconBattery50Outline",
    id: "9762:2515",
    key: ".IconBattery50Outline",
  },
  ".IconCog8ToothOutline": {
    name: ".IconCog8ToothOutline",
    id: "9762:2517",
    key: ".IconCog8ToothOutline",
  },
  ".IconHandThumbDownOutline": {
    name: ".IconHandThumbDownOutline",
    id: "9762:2519",
    key: ".IconHandThumbDownOutline",
  },
  ".IconRadioOutline": {
    name: ".IconRadioOutline",
    id: "9762:2521",
    key: ".IconRadioOutline",
  },
  ".IconAdjustmentsVerticalOutline": {
    name: ".IconAdjustmentsVerticalOutline",
    id: "9762:2523",
    key: ".IconAdjustmentsVerticalOutline",
  },
  ".IconBeakerOutline": {
    name: ".IconBeakerOutline",
    id: "9762:2525",
    key: ".IconBeakerOutline",
  },
  ".IconCommandLineOutline": {
    name: ".IconCommandLineOutline",
    id: "9762:2527",
    key: ".IconCommandLineOutline",
  },
  ".IconHandThumbUpOutline": {
    name: ".IconHandThumbUpOutline",
    id: "9762:2529",
    key: ".IconHandThumbUpOutline",
  },
  ".IconBellOutline": {
    name: ".IconBellOutline",
    id: "9762:2531",
    key: ".IconBellOutline",
  },
  ".IconComputerDesktopOutline": {
    name: ".IconComputerDesktopOutline",
    id: "9762:2533",
    key: ".IconComputerDesktopOutline",
  },
  ".IconHashtagOutline": {
    name: ".IconHashtagOutline",
    id: "9762:2535",
    key: ".IconHashtagOutline",
  },
  ".IconReceiptRefundOutline": {
    name: ".IconReceiptRefundOutline",
    id: "9762:2537",
    key: ".IconReceiptRefundOutline",
  },
  ".IconArchiveBoxArrowDownOutline": {
    name: ".IconArchiveBoxArrowDownOutline",
    id: "9762:2539",
    key: ".IconArchiveBoxArrowDownOutline",
  },
  ".IconBellAlertOutline": {
    name: ".IconBellAlertOutline",
    id: "9762:2541",
    key: ".IconBellAlertOutline",
  },
  ".IconCpuChipOutline": {
    name: ".IconCpuChipOutline",
    id: "9762:2543",
    key: ".IconCpuChipOutline",
  },
  ".IconHeartOutline": {
    name: ".IconHeartOutline",
    id: "9762:2545",
    key: ".IconHeartOutline",
  },
  ".IconRectangleGroupOutline": {
    name: ".IconRectangleGroupOutline",
    id: "9762:2547",
    key: ".IconRectangleGroupOutline",
  },
  ".IconArchiveBoxXMarkOutline": {
    name: ".IconArchiveBoxXMarkOutline",
    id: "9762:2549",
    key: ".IconArchiveBoxXMarkOutline",
  },
  ".IconBellSlashOutline": {
    name: ".IconBellSlashOutline",
    id: "9762:2551",
    key: ".IconBellSlashOutline",
  },
  ".IconCreditCardOutline": {
    name: ".IconCreditCardOutline",
    id: "9762:2553",
    key: ".IconCreditCardOutline",
  },
  ".IconHomeOutline": {
    name: ".IconHomeOutline",
    id: "9762:2555",
    key: ".IconHomeOutline",
  },
  ".IconRectangleStackOutline": {
    name: ".IconRectangleStackOutline",
    id: "9762:2557",
    key: ".IconRectangleStackOutline",
  },
  ".IconCubeOutline": {
    name: ".IconCubeOutline",
    id: "9762:2559",
    key: ".IconCubeOutline",
  },
  ".IconHomeModernOutline": {
    name: ".IconHomeModernOutline",
    id: "9762:2561",
    key: ".IconHomeModernOutline",
  },
  ".IconRocketLaunchOutline": {
    name: ".IconRocketLaunchOutline",
    id: "9762:2563",
    key: ".IconRocketLaunchOutline",
  },
  ".IconArrowDownCircleOutline": {
    name: ".IconArrowDownCircleOutline",
    id: "9762:2565",
    key: ".IconArrowDownCircleOutline",
  },
  ".IconBoltOutline": {
    name: ".IconBoltOutline",
    id: "9762:2567",
    key: ".IconBoltOutline",
  },
  ".IconCubeTransparentOutline": {
    name: ".IconCubeTransparentOutline",
    id: "9762:2569",
    key: ".IconCubeTransparentOutline",
  },
  ".IconIdentificationOutline": {
    name: ".IconIdentificationOutline",
    id: "9762:2571",
    key: ".IconIdentificationOutline",
  },
  ".IconRssOutline": {
    name: ".IconRssOutline",
    id: "9762:2573",
    key: ".IconRssOutline",
  },
  ".IconArrowDownLeftOutline": {
    name: ".IconArrowDownLeftOutline",
    id: "9762:2575",
    key: ".IconArrowDownLeftOutline",
  },
  ".IconBoltSlashOutline": {
    name: ".IconBoltSlashOutline",
    id: "9762:2577",
    key: ".IconBoltSlashOutline",
  },
  ".IconCurrencyBangladeshiOutline": {
    name: ".IconCurrencyBangladeshiOutline",
    id: "9762:2579",
    key: ".IconCurrencyBangladeshiOutline",
  },
  ".IconInboxOutline": {
    name: ".IconInboxOutline",
    id: "9762:2581",
    key: ".IconInboxOutline",
  },
  ".IconScaleOutline": {
    name: ".IconScaleOutline",
    id: "9762:2583",
    key: ".IconScaleOutline",
  },
  ".IconArrowDownOnSquareOutline": {
    name: ".IconArrowDownOnSquareOutline",
    id: "9762:2585",
    key: ".IconArrowDownOnSquareOutline",
  },
  ".IconInboxArrowDownOutline": {
    name: ".IconInboxArrowDownOutline",
    id: "9762:2587",
    key: ".IconInboxArrowDownOutline",
  },
  ".IconScissorsOutline": {
    name: ".IconScissorsOutline",
    id: "9762:2589",
    key: ".IconScissorsOutline",
  },
  ".IconArrowDownOnSquareStackOutline": {
    name: ".IconArrowDownOnSquareStackOutline",
    id: "9762:2591",
    key: ".IconArrowDownOnSquareStackOutline",
  },
  ".IconBookmarkOutline": {
    name: ".IconBookmarkOutline",
    id: "9762:2593",
    key: ".IconBookmarkOutline",
  },
  ".IconCurrencyEuroOutline": {
    name: ".IconCurrencyEuroOutline",
    id: "9762:2595",
    key: ".IconCurrencyEuroOutline",
  },
  ".IconInboxStackOutline": {
    name: ".IconInboxStackOutline",
    id: "9762:2597",
    key: ".IconInboxStackOutline",
  },
  ".IconServerOutline": {
    name: ".IconServerOutline",
    id: "9762:2599",
    key: ".IconServerOutline",
  },
  ".IconArrowDownRightOutline": {
    name: ".IconArrowDownRightOutline",
    id: "9762:2601",
    key: ".IconArrowDownRightOutline",
  },
  ".IconBookmarkSlashOutline": {
    name: ".IconBookmarkSlashOutline",
    id: "9762:2603",
    key: ".IconBookmarkSlashOutline",
  },
  ".IconCurrencyPoundOutline": {
    name: ".IconCurrencyPoundOutline",
    id: "9762:2605",
    key: ".IconCurrencyPoundOutline",
  },
  ".IconInformationCircleOutline": {
    name: ".IconInformationCircleOutline",
    id: "9762:2607",
    key: ".IconInformationCircleOutline",
  },
  ".IconServerStackOutline": {
    name: ".IconServerStackOutline",
    id: "9762:2609",
    key: ".IconServerStackOutline",
  },
  ".IconArrowDownTrayOutline": {
    name: ".IconArrowDownTrayOutline",
    id: "9762:2611",
    key: ".IconArrowDownTrayOutline",
  },
  ".IconBookmarkSquareOutline": {
    name: ".IconBookmarkSquareOutline",
    id: "9762:2613",
    key: ".IconBookmarkSquareOutline",
  },
  ".IconShareOutline": {
    name: ".IconShareOutline",
    id: "9762:2615",
    key: ".IconShareOutline",
  },
  ".IconArrowLeftOutline": {
    name: ".IconArrowLeftOutline",
    id: "9762:2617",
    key: ".IconArrowLeftOutline",
  },
  ".IconBriefcaseOutline": {
    name: ".IconBriefcaseOutline",
    id: "9762:2619",
    key: ".IconBriefcaseOutline",
  },
  ".IconCurrencyYenOutline": {
    name: ".IconCurrencyYenOutline",
    id: "9762:2621",
    key: ".IconCurrencyYenOutline",
  },
  ".IconLanguageOutline": {
    name: ".IconLanguageOutline",
    id: "9762:2623",
    key: ".IconLanguageOutline",
  },
  ".IconShieldCheckOutline": {
    name: ".IconShieldCheckOutline",
    id: "9762:2625",
    key: ".IconShieldCheckOutline",
  },
  ".IconArrowLeftCircleOutline": {
    name: ".IconArrowLeftCircleOutline",
    id: "9762:2627",
    key: ".IconArrowLeftCircleOutline",
  },
  ".IconBugAntOutline": {
    name: ".IconBugAntOutline",
    id: "9762:2629",
    key: ".IconBugAntOutline",
  },
  ".IconCursorArrowRaysOutline": {
    name: ".IconCursorArrowRaysOutline",
    id: "9762:2631",
    key: ".IconCursorArrowRaysOutline",
  },
  ".IconLifebuoyOutline": {
    name: ".IconLifebuoyOutline",
    id: "9762:2633",
    key: ".IconLifebuoyOutline",
  },
  ".IconShieldExclamationOutline": {
    name: ".IconShieldExclamationOutline",
    id: "9762:2635",
    key: ".IconShieldExclamationOutline",
  },
  ".IconArrowLeftEndOnRectangleOutline": {
    name: ".IconArrowLeftEndOnRectangleOutline",
    id: "9762:2637",
    key: ".IconArrowLeftEndOnRectangleOutline",
  },
  ".IconBuildingLibraryOutline": {
    name: ".IconBuildingLibraryOutline",
    id: "9762:2639",
    key: ".IconBuildingLibraryOutline",
  },
  ".IconCursorArrowRippleOutline": {
    name: ".IconCursorArrowRippleOutline",
    id: "9762:2641",
    key: ".IconCursorArrowRippleOutline",
  },
  ".IconArrowLeftStartOnRectangleOutline": {
    name: ".IconArrowLeftStartOnRectangleOutline",
    id: "9762:2643",
    key: ".IconArrowLeftStartOnRectangleOutline",
  },
  ".IconBuildingOfficeOutline": {
    name: ".IconBuildingOfficeOutline",
    id: "9762:2645",
    key: ".IconBuildingOfficeOutline",
  },
  ".IconDevicePhoneMobileOutline": {
    name: ".IconDevicePhoneMobileOutline",
    id: "9762:2647",
    key: ".IconDevicePhoneMobileOutline",
  },
  ".IconLinkOutline": {
    name: ".IconLinkOutline",
    id: "9762:2649",
    key: ".IconLinkOutline",
  },
  ".IconShoppingCartOutline": {
    name: ".IconShoppingCartOutline",
    id: "9762:2651",
    key: ".IconShoppingCartOutline",
  },
  ".IconArrowLongDownOutline": {
    name: ".IconArrowLongDownOutline",
    id: "9762:2653",
    key: ".IconArrowLongDownOutline",
  },
  ".IconBuildingOffice2Outline": {
    name: ".IconBuildingOffice2Outline",
    id: "9762:2655",
    key: ".IconBuildingOffice2Outline",
  },
  ".IconDeviceTabletOutline": {
    name: ".IconDeviceTabletOutline",
    id: "9762:2657",
    key: ".IconDeviceTabletOutline",
  },
  ".IconListBulletOutline": {
    name: ".IconListBulletOutline",
    id: "9762:2659",
    key: ".IconListBulletOutline",
  },
  ".IconSignalOutline": {
    name: ".IconSignalOutline",
    id: "9762:2661",
    key: ".IconSignalOutline",
  },
  ".IconArrowLongLeftOutline": {
    name: ".IconArrowLongLeftOutline",
    id: "9762:2663",
    key: ".IconArrowLongLeftOutline",
  },
  ".IconBuildingStorefrontOutline": {
    name: ".IconBuildingStorefrontOutline",
    id: "9762:2665",
    key: ".IconBuildingStorefrontOutline",
  },
  ".IconDocumentOutline": {
    name: ".IconDocumentOutline",
    id: "9762:2667",
    key: ".IconDocumentOutline",
  },
  ".IconLockClosedOutline": {
    name: ".IconLockClosedOutline",
    id: "9762:2669",
    key: ".IconLockClosedOutline",
  },
  ".IconCakeOutline": {
    name: ".IconCakeOutline",
    id: "9762:2671",
    key: ".IconCakeOutline",
  },
  ".IconDocumentArrowDownOutline": {
    name: ".IconDocumentArrowDownOutline",
    id: "9762:2673",
    key: ".IconDocumentArrowDownOutline",
  },
  ".IconLockOpenOutline": {
    name: ".IconLockOpenOutline",
    id: "9762:2675",
    key: ".IconLockOpenOutline",
  },
  ".IconSparklesOutline": {
    name: ".IconSparklesOutline",
    id: "9762:2677",
    key: ".IconSparklesOutline",
  },
  ".IconArrowLongUpOutline": {
    name: ".IconArrowLongUpOutline",
    id: "9762:2679",
    key: ".IconArrowLongUpOutline",
  },
  ".IconCalculatorOutline": {
    name: ".IconCalculatorOutline",
    id: "9762:2681",
    key: ".IconCalculatorOutline",
  },
  ".IconDocumentArrowUpOutline": {
    name: ".IconDocumentArrowUpOutline",
    id: "9762:2683",
    key: ".IconDocumentArrowUpOutline",
  },
  ".IconMagnifyingGlassOutline": {
    name: ".IconMagnifyingGlassOutline",
    id: "9762:2685",
    key: ".IconMagnifyingGlassOutline",
  },
  ".IconSpeakerWaveOutline": {
    name: ".IconSpeakerWaveOutline",
    id: "9762:2687",
    key: ".IconSpeakerWaveOutline",
  },
  ".IconArrowPathOutline": {
    name: ".IconArrowPathOutline",
    id: "9762:2689",
    key: ".IconArrowPathOutline",
  },
  ".IconCalendarOutline": {
    name: ".IconCalendarOutline",
    id: "9762:2691",
    key: ".IconCalendarOutline",
  },
  ".IconDocumentChartBarOutline": {
    name: ".IconDocumentChartBarOutline",
    id: "9762:2693",
    key: ".IconDocumentChartBarOutline",
  },
  ".IconMagnifyingGlassCircleOutline": {
    name: ".IconMagnifyingGlassCircleOutline",
    id: "9762:2695",
    key: ".IconMagnifyingGlassCircleOutline",
  },
  ".IconSpeakerXMarkOutline": {
    name: ".IconSpeakerXMarkOutline",
    id: "9762:2697",
    key: ".IconSpeakerXMarkOutline",
  },
  ".IconDocumentCheckOutline": {
    name: ".IconDocumentCheckOutline",
    id: "9762:2699",
    key: ".IconDocumentCheckOutline",
  },
  ".IconMagnifyingGlassMinusOutline": {
    name: ".IconMagnifyingGlassMinusOutline",
    id: "9762:2701",
    key: ".IconMagnifyingGlassMinusOutline",
  },
  ".IconSquare2StackOutline": {
    name: ".IconSquare2StackOutline",
    id: "9762:2703",
    key: ".IconSquare2StackOutline",
  },
  ".IconArrowRightOutline": {
    name: ".IconArrowRightOutline",
    id: "9762:2705",
    key: ".IconArrowRightOutline",
  },
  ".IconCameraOutline": {
    name: ".IconCameraOutline",
    id: "9762:2707",
    key: ".IconCameraOutline",
  },
  ".IconDocumentDuplicateOutline": {
    name: ".IconDocumentDuplicateOutline",
    id: "9762:2709",
    key: ".IconDocumentDuplicateOutline",
  },
  ".IconMagnifyingGlassPlusOutline": {
    name: ".IconMagnifyingGlassPlusOutline",
    id: "9762:2711",
    key: ".IconMagnifyingGlassPlusOutline",
  },
  ".IconSquares2X2Outline": {
    name: ".IconSquares2X2Outline",
    id: "9762:2713",
    key: ".IconSquares2X2Outline",
  },
  ".IconArrowRightCircleOutline": {
    name: ".IconArrowRightCircleOutline",
    id: "9762:2715",
    key: ".IconArrowRightCircleOutline",
  },
  ".IconChartBarOutline": {
    name: ".IconChartBarOutline",
    id: "9762:2717",
    key: ".IconChartBarOutline",
  },
  ".IconDocumentMagnifyingGlassOutline": {
    name: ".IconDocumentMagnifyingGlassOutline",
    id: "9762:2719",
    key: ".IconDocumentMagnifyingGlassOutline",
  },
  ".IconMapOutline": {
    name: ".IconMapOutline",
    id: "9762:2721",
    key: ".IconMapOutline",
  },
  ".IconSquaresPlusOutline": {
    name: ".IconSquaresPlusOutline",
    id: "9762:2723",
    key: ".IconSquaresPlusOutline",
  },
  ".IconArrowRightEndOnRectangleOutline": {
    name: ".IconArrowRightEndOnRectangleOutline",
    id: "9762:2725",
    key: ".IconArrowRightEndOnRectangleOutline",
  },
  ".IconMapPinOutline": {
    name: ".IconMapPinOutline",
    id: "9762:2727",
    key: ".IconMapPinOutline",
  },
  ".IconSquare3Stack3DOutline": {
    name: ".IconSquare3Stack3DOutline",
    id: "9762:2729",
    key: ".IconSquare3Stack3DOutline",
  },
  ".IconArrowRightStartOnRectangleOutline": {
    name: ".IconArrowRightStartOnRectangleOutline",
    id: "9762:2731",
    key: ".IconArrowRightStartOnRectangleOutline",
  },
  ".IconChartPieOutline": {
    name: ".IconChartPieOutline",
    id: "9762:2733",
    key: ".IconChartPieOutline",
  },
  ".IconDocumentPlusOutline": {
    name: ".IconDocumentPlusOutline",
    id: "9762:2735",
    key: ".IconDocumentPlusOutline",
  },
  ".IconMegaphoneOutline": {
    name: ".IconMegaphoneOutline",
    id: "9762:2737",
    key: ".IconMegaphoneOutline",
  },
  ".IconStarOutline": {
    name: ".IconStarOutline",
    id: "9762:2739",
    key: ".IconStarOutline",
  },
  ".IconArrowTopRightOnSquareOutline": {
    name: ".IconArrowTopRightOnSquareOutline",
    id: "9762:2741",
    key: ".IconArrowTopRightOnSquareOutline",
  },
  ".IconChatBubbleBottomCenterOutline": {
    name: ".IconChatBubbleBottomCenterOutline",
    id: "9762:2743",
    key: ".IconChatBubbleBottomCenterOutline",
  },
  ".IconDocumentTextOutline": {
    name: ".IconDocumentTextOutline",
    id: "9762:2745",
    key: ".IconDocumentTextOutline",
  },
  ".IconMicrophoneOutline": {
    name: ".IconMicrophoneOutline",
    id: "9762:2747",
    key: ".IconMicrophoneOutline",
  },
  ".IconStopOutline": {
    name: ".IconStopOutline",
    id: "9762:2749",
    key: ".IconStopOutline",
  },
  ".IconArrowTrendingDownOutline": {
    name: ".IconArrowTrendingDownOutline",
    id: "9762:2751",
    key: ".IconArrowTrendingDownOutline",
  },
  ".IconChatBubbleBottomCenterTextOutline": {
    name: ".IconChatBubbleBottomCenterTextOutline",
    id: "9762:2753",
    key: ".IconChatBubbleBottomCenterTextOutline",
  },
  ".IconStopCircleOutline": {
    name: ".IconStopCircleOutline",
    id: "9762:2755",
    key: ".IconStopCircleOutline",
  },
  ".IconArrowTrendingUpOutline": {
    name: ".IconArrowTrendingUpOutline",
    id: "9762:2757",
    key: ".IconArrowTrendingUpOutline",
  },
  ".IconChatBubbleLeftOutline": {
    name: ".IconChatBubbleLeftOutline",
    id: "9762:2759",
    key: ".IconChatBubbleLeftOutline",
  },
  ".IconEllipsisHorizontalCircleOutline": {
    name: ".IconEllipsisHorizontalCircleOutline",
    id: "9762:2761",
    key: ".IconEllipsisHorizontalCircleOutline",
  },
  ".IconMinusCircleOutline": {
    name: ".IconMinusCircleOutline",
    id: "9762:2763",
    key: ".IconMinusCircleOutline",
  },
  ".IconSunOutline": {
    name: ".IconSunOutline",
    id: "9762:2765",
    key: ".IconSunOutline",
  },
  ".IconArrowUpOutline": {
    name: ".IconArrowUpOutline",
    id: "9762:2767",
    key: ".IconArrowUpOutline",
  },
  ".IconChatBubbleLeftEllipsisOutline": {
    name: ".IconChatBubbleLeftEllipsisOutline",
    id: "9762:2769",
    key: ".IconChatBubbleLeftEllipsisOutline",
  },
  ".IconEllipsisVerticalOutline": {
    name: ".IconEllipsisVerticalOutline",
    id: "9762:2771",
    key: ".IconEllipsisVerticalOutline",
  },
  ".IconMoonOutline": {
    name: ".IconMoonOutline",
    id: "9762:2773",
    key: ".IconMoonOutline",
  },
  ".IconSwatchOutline": {
    name: ".IconSwatchOutline",
    id: "9762:2775",
    key: ".IconSwatchOutline",
  },
  ".IconArrowUpCircleOutline": {
    name: ".IconArrowUpCircleOutline",
    id: "9762:2777",
    key: ".IconArrowUpCircleOutline",
  },
  ".IconChatBubbleLeftRightOutline": {
    name: ".IconChatBubbleLeftRightOutline",
    id: "9762:2779",
    key: ".IconChatBubbleLeftRightOutline",
  },
  ".IconEnvelopeOutline": {
    name: ".IconEnvelopeOutline",
    id: "9762:2781",
    key: ".IconEnvelopeOutline",
  },
  ".IconArrowUpLeftOutline": {
    name: ".IconArrowUpLeftOutline",
    id: "9762:2783",
    key: ".IconArrowUpLeftOutline",
  },
  ".IconChatBubbleOvalLeftOutline": {
    name: ".IconChatBubbleOvalLeftOutline",
    id: "9762:2785",
    key: ".IconChatBubbleOvalLeftOutline",
  },
  ".IconEnvelopeOpenOutline": {
    name: ".IconEnvelopeOpenOutline",
    id: "9762:2787",
    key: ".IconEnvelopeOpenOutline",
  },
  ".IconNewspaperOutline": {
    name: ".IconNewspaperOutline",
    id: "9762:2789",
    key: ".IconNewspaperOutline",
  },
  ".IconTagOutline": {
    name: ".IconTagOutline",
    id: "9762:2791",
    key: ".IconTagOutline",
  },
  ".IconArrowUpOnSquareOutline": {
    name: ".IconArrowUpOnSquareOutline",
    id: "9762:2793",
    key: ".IconArrowUpOnSquareOutline",
  },
  ".IconChatBubbleOvalLeftEllipsisOutline": {
    name: ".IconChatBubbleOvalLeftEllipsisOutline",
    id: "9762:2795",
    key: ".IconChatBubbleOvalLeftEllipsisOutline",
  },
  ".IconExclamationCircleOutline": {
    name: ".IconExclamationCircleOutline",
    id: "9762:2797",
    key: ".IconExclamationCircleOutline",
  },
  ".IconNoSymbolOutline": {
    name: ".IconNoSymbolOutline",
    id: "9762:2799",
    key: ".IconNoSymbolOutline",
  },
  ".IconTicketOutline": {
    name: ".IconTicketOutline",
    id: "9762:2801",
    key: ".IconTicketOutline",
  },
  ".IconArrowUpOnSquareStackOutline": {
    name: ".IconArrowUpOnSquareStackOutline",
    id: "9762:2803",
    key: ".IconArrowUpOnSquareStackOutline",
  },
  ".IconCheckOutline": {
    name: ".IconCheckOutline",
    id: "9762:2805",
    key: ".IconCheckOutline",
  },
  ".IconExclamationTriangleOutline": {
    name: ".IconExclamationTriangleOutline",
    id: "9762:2807",
    key: ".IconExclamationTriangleOutline",
  },
  ".IconPaintBrushOutline": {
    name: ".IconPaintBrushOutline",
    id: "9762:2809",
    key: ".IconPaintBrushOutline",
  },
  ".IconCheckTagOutline": {
    name: ".IconCheckTagOutline",
    id: "9762:2811",
    key: ".IconCheckTagOutline",
  },
  ".IconEyeOutline": {
    name: ".IconEyeOutline",
    id: "9762:2813",
    key: ".IconEyeOutline",
  },
  ".IconPaperAirplaneOutline": {
    name: ".IconPaperAirplaneOutline",
    id: "9762:2815",
    key: ".IconPaperAirplaneOutline",
  },
  ".IconTrophyOutline": {
    name: ".IconTrophyOutline",
    id: "9762:2817",
    key: ".IconTrophyOutline",
  },
  ".IconArrowUpTrayOutline": {
    name: ".IconArrowUpTrayOutline",
    id: "9762:2819",
    key: ".IconArrowUpTrayOutline",
  },
  ".IconCheckCircleOutline": {
    name: ".IconCheckCircleOutline",
    id: "9762:2821",
    key: ".IconCheckCircleOutline",
  },
  ".IconEyeDropperOutline": {
    name: ".IconEyeDropperOutline",
    id: "9762:2823",
    key: ".IconEyeDropperOutline",
  },
  ".IconPaperClipOutline": {
    name: ".IconPaperClipOutline",
    id: "9762:2825",
    key: ".IconPaperClipOutline",
  },
  ".IconTruckOutline": {
    name: ".IconTruckOutline",
    id: "9762:2827",
    key: ".IconTruckOutline",
  },
  ".IconArrowUturnDownOutline": {
    name: ".IconArrowUturnDownOutline",
    id: "9762:2829",
    key: ".IconArrowUturnDownOutline",
  },
  ".IconChevronDoubleDownOutline": {
    name: ".IconChevronDoubleDownOutline",
    id: "9762:2831",
    key: ".IconChevronDoubleDownOutline",
  },
  ".IconEyeSlashOutline": {
    name: ".IconEyeSlashOutline",
    id: "9762:2833",
    key: ".IconEyeSlashOutline",
  },
  ".IconPauseOutline": {
    name: ".IconPauseOutline",
    id: "9762:2835",
    key: ".IconPauseOutline",
  },
  ".IconTvOutline": {
    name: ".IconTvOutline",
    id: "9762:2837",
    key: ".IconTvOutline",
  },
  ".IconFaceFrownOutline": {
    name: ".IconFaceFrownOutline",
    id: "9762:2839",
    key: ".IconFaceFrownOutline",
  },
  ".IconPauseCircleOutline": {
    name: ".IconPauseCircleOutline",
    id: "9762:2841",
    key: ".IconPauseCircleOutline",
  },
  ".IconUserOutline": {
    name: ".IconUserOutline",
    id: "9762:2843",
    key: ".IconUserOutline",
  },
  ".IconArrowUturnRightOutline": {
    name: ".IconArrowUturnRightOutline",
    id: "9762:2845",
    key: ".IconArrowUturnRightOutline",
  },
  ".IconChevronDoubleRightOutline": {
    name: ".IconChevronDoubleRightOutline",
    id: "9762:2847",
    key: ".IconChevronDoubleRightOutline",
  },
  ".IconFaceSmileOutline": {
    name: ".IconFaceSmileOutline",
    id: "9762:2849",
    key: ".IconFaceSmileOutline",
  },
  ".IconPencilOutline": {
    name: ".IconPencilOutline",
    id: "9762:2851",
    key: ".IconPencilOutline",
  },
  ".IconUserCircleOutline": {
    name: ".IconUserCircleOutline",
    id: "9762:2853",
    key: ".IconUserCircleOutline",
  },
  ".IconArrowUturnUpOutline": {
    name: ".IconArrowUturnUpOutline",
    id: "9762:2855",
    key: ".IconArrowUturnUpOutline",
  },
  ".IconChevronDoubleUpOutline": {
    name: ".IconChevronDoubleUpOutline",
    id: "9762:2857",
    key: ".IconChevronDoubleUpOutline",
  },
  ".IconFilmOutline": {
    name: ".IconFilmOutline",
    id: "9762:2859",
    key: ".IconFilmOutline",
  },
  ".IconPencilSquareOutline": {
    name: ".IconPencilSquareOutline",
    id: "9762:2861",
    key: ".IconPencilSquareOutline",
  },
  ".IconUserGroupOutline": {
    name: ".IconUserGroupOutline",
    id: "9762:2863",
    key: ".IconUserGroupOutline",
  },
  ".IconArrowsPointingInOutline": {
    name: ".IconArrowsPointingInOutline",
    id: "9762:2865",
    key: ".IconArrowsPointingInOutline",
  },
  ".IconPhoneOutline": {
    name: ".IconPhoneOutline",
    id: "9762:2867",
    key: ".IconPhoneOutline",
  },
  ".IconUserMinusOutline": {
    name: ".IconUserMinusOutline",
    id: "9762:2869",
    key: ".IconUserMinusOutline",
  },
  ".IconArrowsPointingOutOutline": {
    name: ".IconArrowsPointingOutOutline",
    id: "9762:2871",
    key: ".IconArrowsPointingOutOutline",
  },
  ".IconChevronLeftOutline": {
    name: ".IconChevronLeftOutline",
    id: "9762:2873",
    key: ".IconChevronLeftOutline",
  },
  ".IconFireOutline": {
    name: ".IconFireOutline",
    id: "9762:2875",
    key: ".IconFireOutline",
  },
  ".IconPhoneArrowDownLeftOutline": {
    name: ".IconPhoneArrowDownLeftOutline",
    id: "9762:2877",
    key: ".IconPhoneArrowDownLeftOutline",
  },
  ".IconUserPlusOutline": {
    name: ".IconUserPlusOutline",
    id: "9762:2879",
    key: ".IconUserPlusOutline",
  },
  ".IconArrowsRightLeftOutline": {
    name: ".IconArrowsRightLeftOutline",
    id: "9762:2881",
    key: ".IconArrowsRightLeftOutline",
  },
  ".IconChevronRightOutline": {
    name: ".IconChevronRightOutline",
    id: "9762:2883",
    key: ".IconChevronRightOutline",
  },
  ".IconFlagOutline": {
    name: ".IconFlagOutline",
    id: "9762:2885",
    key: ".IconFlagOutline",
  },
  ".IconPhoneArrowUpRightOutline": {
    name: ".IconPhoneArrowUpRightOutline",
    id: "9762:2887",
    key: ".IconPhoneArrowUpRightOutline",
  },
  ".IconUsersOutline": {
    name: ".IconUsersOutline",
    id: "9762:2889",
    key: ".IconUsersOutline",
  },
  ".IconArrowsUpDownOutline": {
    name: ".IconArrowsUpDownOutline",
    id: "9762:2891",
    key: ".IconArrowsUpDownOutline",
  },
  ".IconChevronUpOutline": {
    name: ".IconChevronUpOutline",
    id: "9762:2893",
    key: ".IconChevronUpOutline",
  },
  ".IconVariableOutline": {
    name: ".IconVariableOutline",
    id: "9762:2895",
    key: ".IconVariableOutline",
  },
  ".IconAtSymbolOutline": {
    name: ".IconAtSymbolOutline",
    id: "9762:2897",
    key: ".IconAtSymbolOutline",
  },
  ".IconChevronUpDownOutline": {
    name: ".IconChevronUpDownOutline",
    id: "9762:2899",
    key: ".IconChevronUpDownOutline",
  },
  ".IconFolderArrowDownOutline": {
    name: ".IconFolderArrowDownOutline",
    id: "9762:2901",
    key: ".IconFolderArrowDownOutline",
  },
  ".IconPhotoOutline": {
    name: ".IconPhotoOutline",
    id: "9762:2903",
    key: ".IconPhotoOutline",
  },
  ".IconVideoCameraOutline": {
    name: ".IconVideoCameraOutline",
    id: "9762:2905",
    key: ".IconVideoCameraOutline",
  },
  ".IconBackspaceOutline": {
    name: ".IconBackspaceOutline",
    id: "9762:2907",
    key: ".IconBackspaceOutline",
  },
  ".IconCircleStackOutline": {
    name: ".IconCircleStackOutline",
    id: "9762:2909",
    key: ".IconCircleStackOutline",
  },
  ".IconFolderMinusOutline": {
    name: ".IconFolderMinusOutline",
    id: "9762:2911",
    key: ".IconFolderMinusOutline",
  },
  ".IconPlayOutline": {
    name: ".IconPlayOutline",
    id: "9762:2913",
    key: ".IconPlayOutline",
  },
  ".IconVideoCameraSlashOutline": {
    name: ".IconVideoCameraSlashOutline",
    id: "9762:2915",
    key: ".IconVideoCameraSlashOutline",
  },
  ".IconBackwardOutline": {
    name: ".IconBackwardOutline",
    id: "9762:2917",
    key: ".IconBackwardOutline",
  },
  ".IconClipboardOutline": {
    name: ".IconClipboardOutline",
    id: "9762:2919",
    key: ".IconClipboardOutline",
  },
  ".IconFolderOpenOutline": {
    name: ".IconFolderOpenOutline",
    id: "9762:2921",
    key: ".IconFolderOpenOutline",
  },
  ".IconBanknotesOutline": {
    name: ".IconBanknotesOutline",
    id: "9762:2923",
    key: ".IconBanknotesOutline",
  },
  ".IconClipboardDocumentOutline": {
    name: ".IconClipboardDocumentOutline",
    id: "9762:2925",
    key: ".IconClipboardDocumentOutline",
  },
  ".IconFolderPlusOutline": {
    name: ".IconFolderPlusOutline",
    id: "9762:2927",
    key: ".IconFolderPlusOutline",
  },
  ".IconPlayPauseOutline": {
    name: ".IconPlayPauseOutline",
    id: "9762:2929",
    key: ".IconPlayPauseOutline",
  },
  ".IconViewfinderCircleOutline": {
    name: ".IconViewfinderCircleOutline",
    id: "9762:2931",
    key: ".IconViewfinderCircleOutline",
  },
  ".IconBars2Outline": {
    name: ".IconBars2Outline",
    id: "9762:2933",
    key: ".IconBars2Outline",
  },
  ".IconClipboardDocumentCheckOutline": {
    name: ".IconClipboardDocumentCheckOutline",
    id: "9762:2935",
    key: ".IconClipboardDocumentCheckOutline",
  },
  ".IconForwardOutline": {
    name: ".IconForwardOutline",
    id: "9762:2937",
    key: ".IconForwardOutline",
  },
  ".IconPlusOutline": {
    name: ".IconPlusOutline",
    id: "9762:2939",
    key: ".IconPlusOutline",
  },
  ".IconWalletOutline": {
    name: ".IconWalletOutline",
    id: "9762:2941",
    key: ".IconWalletOutline",
  },
  ".IconBars3Outline": {
    name: ".IconBars3Outline",
    id: "9762:2943",
    key: ".IconBars3Outline",
  },
  ".IconClipboardDocumentListOutline": {
    name: ".IconClipboardDocumentListOutline",
    id: "9762:2945",
    key: ".IconClipboardDocumentListOutline",
  },
  ".IconFunnelOutline": {
    name: ".IconFunnelOutline",
    id: "9762:2947",
    key: ".IconFunnelOutline",
  },
  ".IconPlusCircleOutline": {
    name: ".IconPlusCircleOutline",
    id: "9762:2949",
    key: ".IconPlusCircleOutline",
  },
  ".IconClockOutline": {
    name: ".IconClockOutline",
    id: "9762:2951",
    key: ".IconClockOutline",
  },
  ".IconGifOutline": {
    name: ".IconGifOutline",
    id: "9762:2953",
    key: ".IconGifOutline",
  },
  ".IconPowerOutline": {
    name: ".IconPowerOutline",
    id: "9762:2955",
    key: ".IconPowerOutline",
  },
  ".IconWindowOutline": {
    name: ".IconWindowOutline",
    id: "9762:2957",
    key: ".IconWindowOutline",
  },
  ".IconBars3BottomRightOutline": {
    name: ".IconBars3BottomRightOutline",
    id: "9762:2959",
    key: ".IconBars3BottomRightOutline",
  },
  ".IconCloudOutline": {
    name: ".IconCloudOutline",
    id: "9762:2961",
    key: ".IconCloudOutline",
  },
  ".IconGiftOutline": {
    name: ".IconGiftOutline",
    id: "9762:2963",
    key: ".IconGiftOutline",
  },
  ".IconPresentationChartBarOutline": {
    name: ".IconPresentationChartBarOutline",
    id: "9762:2965",
    key: ".IconPresentationChartBarOutline",
  },
  ".IconWrenchOutline": {
    name: ".IconWrenchOutline",
    id: "9762:2967",
    key: ".IconWrenchOutline",
  },
  ".IconBars3CenterLeftOutline": {
    name: ".IconBars3CenterLeftOutline",
    id: "9762:2969",
    key: ".IconBars3CenterLeftOutline",
  },
  ".IconCloudArrowDownOutline": {
    name: ".IconCloudArrowDownOutline",
    id: "9762:2971",
    key: ".IconCloudArrowDownOutline",
  },
  ".IconGiftTopOutline": {
    name: ".IconGiftTopOutline",
    id: "9762:2973",
    key: ".IconGiftTopOutline",
  },
  ".IconPresentationChartLineOutline": {
    name: ".IconPresentationChartLineOutline",
    id: "9762:2975",
    key: ".IconPresentationChartLineOutline",
  },
  ".IconWrenchScrewdriverOutline": {
    name: ".IconWrenchScrewdriverOutline",
    id: "9762:2977",
    key: ".IconWrenchScrewdriverOutline",
  },
  ".IconGlobeAltOutline": {
    name: ".IconGlobeAltOutline",
    id: "9762:2979",
    key: ".IconGlobeAltOutline",
  },
  ".IconPrinterOutline": {
    name: ".IconPrinterOutline",
    id: "9762:2981",
    key: ".IconPrinterOutline",
  },
  ".IconXCircleOutline": {
    name: ".IconXCircleOutline",
    id: "9762:2983",
    key: ".IconXCircleOutline",
  },
  ".IconBarsArrowDownOutline": {
    name: ".IconBarsArrowDownOutline",
    id: "9762:2985",
    key: ".IconBarsArrowDownOutline",
  },
  ".IconCodeBracketOutline": {
    name: ".IconCodeBracketOutline",
    id: "9762:2987",
    key: ".IconCodeBracketOutline",
  },
  ".IconGlobeAmericasOutline": {
    name: ".IconGlobeAmericasOutline",
    id: "9762:2989",
    key: ".IconGlobeAmericasOutline",
  },
  ".IconPuzzlePieceOutline": {
    name: ".IconPuzzlePieceOutline",
    id: "9762:2991",
    key: ".IconPuzzlePieceOutline",
  },
  ".IconXMarkOutline": {
    name: ".IconXMarkOutline",
    id: "9762:2993",
    key: ".IconXMarkOutline",
  },
  ".IconBarsArrowUpOutline": {
    name: ".IconBarsArrowUpOutline",
    id: "9762:2995",
    key: ".IconBarsArrowUpOutline",
  },
  ".IconCodeBracketSquareOutline": {
    name: ".IconCodeBracketSquareOutline",
    id: "9762:2997",
    key: ".IconCodeBracketSquareOutline",
  },
  ".IconGlobeAsiaAustraliaOutline": {
    name: ".IconGlobeAsiaAustraliaOutline",
    id: "9762:2999",
    key: ".IconGlobeAsiaAustraliaOutline",
  },
  ".IconQrCodeOutline": {
    name: ".IconQrCodeOutline",
    id: "9762:3001",
    key: ".IconQrCodeOutline",
  },
  ".IconBattery0Outline": {
    name: ".IconBattery0Outline",
    id: "9762:3003",
    key: ".IconBattery0Outline",
  },
  ".IconCogOutline": {
    name: ".IconCogOutline",
    id: "9762:3005",
    key: ".IconCogOutline",
  },
  ".IconReceiptPercentOutline": {
    name: ".IconReceiptPercentOutline",
    id: "9762:3007",
    key: ".IconReceiptPercentOutline",
  },
  ".IconArchiveBoxOutline": {
    name: ".IconArchiveBoxOutline",
    id: "9762:3009",
    key: ".IconArchiveBoxOutline",
  },
  ".IconArrowDownOutline": {
    name: ".IconArrowDownOutline",
    id: "9762:3011",
    key: ".IconArrowDownOutline",
  },
  ".IconBellSnoozeOutline": {
    name: ".IconBellSnoozeOutline",
    id: "9762:3013",
    key: ".IconBellSnoozeOutline",
  },
  ".IconBookOpenOutline": {
    name: ".IconBookOpenOutline",
    id: "9762:3015",
    key: ".IconBookOpenOutline",
  },
  ".IconCurrencyDollarOutline": {
    name: ".IconCurrencyDollarOutline",
    id: "9762:3017",
    key: ".IconCurrencyDollarOutline",
  },
  ".IconCurrencyRupeeOutline": {
    name: ".IconCurrencyRupeeOutline",
    id: "9762:3019",
    key: ".IconCurrencyRupeeOutline",
  },
  ".IconKeyOutline": {
    name: ".IconKeyOutline",
    id: "9762:3021",
    key: ".IconKeyOutline",
  },
  ".IconLightBulbOutline": {
    name: ".IconLightBulbOutline",
    id: "9762:3023",
    key: ".IconLightBulbOutline",
  },
  ".IconShoppingBagOutline": {
    name: ".IconShoppingBagOutline",
    id: "9762:3025",
    key: ".IconShoppingBagOutline",
  },
  ".IconSignalSlashOutline": {
    name: ".IconSignalSlashOutline",
    id: "9762:3027",
    key: ".IconSignalSlashOutline",
  },
  ".IconArrowLongRightOutline": {
    name: ".IconArrowLongRightOutline",
    id: "9762:3029",
    key: ".IconArrowLongRightOutline",
  },
  ".IconArrowPathRoundedSquareOutline": {
    name: ".IconArrowPathRoundedSquareOutline",
    id: "9762:3031",
    key: ".IconArrowPathRoundedSquareOutline",
  },
  ".IconCalendarDaysOutline": {
    name: ".IconCalendarDaysOutline",
    id: "9762:3033",
    key: ".IconCalendarDaysOutline",
  },
  ".IconChartBarSquareOutline": {
    name: ".IconChartBarSquareOutline",
    id: "9762:3035",
    key: ".IconChartBarSquareOutline",
  },
  ".IconDocumentMinusOutline": {
    name: ".IconDocumentMinusOutline",
    id: "9762:3037",
    key: ".IconDocumentMinusOutline",
  },
  ".IconEllipsisHorizontalOutline": {
    name: ".IconEllipsisHorizontalOutline",
    id: "9762:3039",
    key: ".IconEllipsisHorizontalOutline",
  },
  ".IconMinusOutline": {
    name: ".IconMinusOutline",
    id: "9762:3041",
    key: ".IconMinusOutline",
  },
  ".IconMusicalNoteOutline": {
    name: ".IconMusicalNoteOutline",
    id: "9762:3043",
    key: ".IconMusicalNoteOutline",
  },
  ".IconTableCellsOutline": {
    name: ".IconTableCellsOutline",
    id: "9762:3045",
    key: ".IconTableCellsOutline",
  },
  ".IconTrashOutline": {
    name: ".IconTrashOutline",
    id: "9762:3047",
    key: ".IconTrashOutline",
  },
  ".IconArrowUpRightOutline": {
    name: ".IconArrowUpRightOutline",
    id: "9762:3049",
    key: ".IconArrowUpRightOutline",
  },
  ".IconArrowUturnLeftOutline": {
    name: ".IconArrowUturnLeftOutline",
    id: "9762:3051",
    key: ".IconArrowUturnLeftOutline",
  },
  ".IconChevronDoubleLeftOutline": {
    name: ".IconChevronDoubleLeftOutline",
    id: "9762:3053",
    key: ".IconChevronDoubleLeftOutline",
  },
  ".IconChevronDownOutline": {
    name: ".IconChevronDownOutline",
    id: "9762:3055",
    key: ".IconChevronDownOutline",
  },
  ".IconFingerPrintOutline": {
    name: ".IconFingerPrintOutline",
    id: "9762:3057",
    key: ".IconFingerPrintOutline",
  },
  ".IconFolderOutline": {
    name: ".IconFolderOutline",
    id: "9762:3059",
    key: ".IconFolderOutline",
  },
  ".IconPhoneXMarkOutline": {
    name: ".IconPhoneXMarkOutline",
    id: "9762:3061",
    key: ".IconPhoneXMarkOutline",
  },
  ".IconPlayCircleOutline": {
    name: ".IconPlayCircleOutline",
    id: "9762:3063",
    key: ".IconPlayCircleOutline",
  },
  ".IconViewColumnsOutline": {
    name: ".IconViewColumnsOutline",
    id: "9762:3065",
    key: ".IconViewColumnsOutline",
  },
  ".IconWifiOutline": {
    name: ".IconWifiOutline",
    id: "9762:3067",
    key: ".IconWifiOutline",
  },
  ".IconBars3BottomLeftOutline": {
    name: ".IconBars3BottomLeftOutline",
    id: "9762:3069",
    key: ".IconBars3BottomLeftOutline",
  },
  ".IconBars4Outline": {
    name: ".IconBars4Outline",
    id: "9762:3071",
    key: ".IconBars4Outline",
  },
  ".IconCloudArrowUpOutline": {
    name: ".IconCloudArrowUpOutline",
    id: "9762:3073",
    key: ".IconCloudArrowUpOutline",
  },
  ".IconGlobeEuropeAfricaOutline": {
    name: ".IconGlobeEuropeAfricaOutline",
    id: "9762:3075",
    key: ".IconGlobeEuropeAfricaOutline",
  },
  ".IconQuestionMarkCircleOutline": {
    name: ".IconQuestionMarkCircleOutline",
    id: "9762:3077",
    key: ".IconQuestionMarkCircleOutline",
  },
  Label: {
    name: "Label",
    id: "9762:3080",
    key: "Label",
  },
  Legend: {
    name: "Legend",
    id: "9762:3082",
    key: "Legend",
  },
  Description: {
    name: "Description",
    id: "9762:3084",
    key: "Description",
  },
  FieldError: {
    name: "Error Message",
    id: "9762:3086",
    key: "FieldError",
  },
  Field: {
    name: "Field",
    id: "9762:3088",
    key: "Field",
  },
  FieldGroup: {
    name: "Field Group",
    id: "9762:3121",
    key: "FieldGroup",
  },
  Fieldset: {
    name: "Fieldset",
    id: "9762:3127",
    key: "Fieldset",
  },
  Form: {
    name: "Form",
    id: "9762:3140",
    key: "Form",
  },
};

export function getDataFromFigma(figma: any) {
  const componentMap: ComponentMap = {};
  figma.currentPage
    .findAllWithCriteria({ types: ["COMPONENT", "COMPONENT_SET"] })
    .reduce(
      (
        into: ComponentMap,
        node: { parent: { type: string }; name: string; id: string },
      ) => {
        if (node.parent.type !== "COMPONENT_SET") {
          const cleanKey = node.name.split(" ").join("");
          const key = into[cleanKey] ? `${cleanKey}:${node.id}` : cleanKey;
          into[key] = { name: node.name, id: node.id, key };
        }
        return into;
      },
      componentMap,
    );
}

export function FigmaUrlFromComponentName({
  name,
  url,
  components,
}: {
  name: string;
  url: string;
  components: ComponentMap;
}) {
  const [disabled, setDisabled] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");

  useEffect(() => {
    const found = components[name];
    if (!found) {
      setDisabled(true);
      setFinalUrl("UNFOUND");
    } else {
      setDisabled(false);
      setFinalUrl(`${url}?node-id=${found.id}`);
    }
  }, [name, url]);

  return (
    <InputField
      label={name}
      isDisabled={disabled}
      // @ts-expect-error
      onFocus={(e) => e.target.select()}
      isReadOnly
      value={finalUrl}
    />
  );
}
