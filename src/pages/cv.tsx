//= Structures & Data
// Others
import { GetStaticProps } from 'next';

//= React components
// Own
import { CVPageContent } from "../modules/cv_page";

export default CVPageContent;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            hideFooter: true
        },
    };
};
