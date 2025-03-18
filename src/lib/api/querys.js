// src/queries/homepageQuery.js
export const homepageQuery = `
    query Homepage {
        ueberMich {
            title,
            aboutUs {
                value 
            },
            imageAboutMe {
                id
                url
                alt
            }
        }
    }
`;