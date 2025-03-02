export interface MenuItem {
    href?: string;
    text: string;
    isDropdown?: boolean;
    items?: Array<{
        text: string;
        href: string;
    }>;
}