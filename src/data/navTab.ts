export interface NavTabProp { 
    name: string;
    target: string;
}
export const aboutTab: NavTabProp = {
    name: "About",
    target: "about-tab",
};
export const workTab: NavTabProp = {
    name: "Work",
    target: "work-tab",
};
export const educationTab: NavTabProp = {
    name: "Education",
    target: "education-tab",
};
export const projectsTab: NavTabProp = {
    name: "Projects",
    target: "project-tab",
};
export const navTab: NavTabProp[] = [
    aboutTab,
    workTab,
    educationTab,
    projectsTab,
];