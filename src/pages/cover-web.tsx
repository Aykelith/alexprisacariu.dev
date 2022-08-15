//= Structures & Data
// Others
import { GetStaticProps } from 'next';

//= React components
// Own
import { CoverPageContent } from "../modules/cover_web_page";

export default CoverPageContent;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            hideFooter: true
        },
    };
};

