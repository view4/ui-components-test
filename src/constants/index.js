import dashboard from "../assets/navigation/dashboard.svg";
import inventory from "../assets/navigation/inventory.svg";
import affiliates from "../assets/navigation/affiliates.svg";
import orders from "../assets/navigation/orders.svg";
import customers from "../assets/navigation/customers.svg";
import website from "../assets/navigation/website.svg";
import marketing from "../assets/navigation/marketing.svg";
import admin from "../assets/navigation/admin.svg";
import inbox from "../assets/navigation/inbox.svg";
import notifications from "../assets/navigation/notifications.svg";

import dots from "../assets/tri-dots.svg";
import channels from "../assets/channels.svg";
import checkbox from "../assets/checkbox.svg";

const search = [
  {
    text: "Earnings by Items",
    color: "#FFA2C0",
  },
  {
    text: "This month Statements",
    color: "#FFCE73",
  },
  {
    text: "How many sales I got...",
    color: "#A0D7E7",
  },
];

const notificationMessages = [
  {
    title: "New Order",
    type: "Commented On",
    target: "Collab Design",
    time: "8h",
  },
  {
    title: "Glen Greer",
    type: "Commented On",
    target: "Sapiens Illustration",
    time: "12h",
  },
  {
    title: "Sarah Saunders",
    type: "Just Published",
    target: "Collab Design",
    time: "16h",
  },
  {
    title: "Sarah Saunders",
    type: "Sent you a message",
    target: "Folio Designer",
    time: "21h",
  },
  {
    title: "Sarah Saunders",
    type: "Liked",
    target: "Folio Agency",
    time: "22h",
  },
];

const buttonsTypeA = ["Add Product", "Go", " Add More"];

const buttonsTypeB = [
  { indicator: channels, text: "Channel Listing" },
  { indicator: dots, text: "More Options" },
  { indicator: checkbox, text: " 1 Selected" },
];

const navigationLinks = [
  {
    text: "Dashboard",
    indicator: dashboard,
  },
  {
    text: "Inventory",
    indicator: inventory,
  },
  {
    text: "Affiliates",
    indicator: affiliates,
  },
  {
    text: "Orders",
    indicator: orders,
  },
  {
    text: "Customers",
    indicator: customers,
  },
  {
    text: "Website",
    indicator: website,
  },
  {
    text: "Marketing",
    indicator: marketing,
  },
  {
    text: "Admin",
    indicator: admin,
  },
];
const navigationInsights = [
  {
    text: "Inbox",
    indicator: inbox,
    notifications: 18,
  },
  {
    text: "Notifications",
    indicator: notifications,
    notifications: 2,
  },
];

export {
  search,
  notificationMessages,
  buttonsTypeA,
  buttonsTypeB,
  navigationLinks,
  navigationInsights,
};
