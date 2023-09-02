//= Types & Enums & Consts
// Own
import { MailAddress, WebsiteAddress, GitHubAddress, GitLabAddress } from '../../general';

//= Assets
// Own
import MailSVG from '../../../icons/mail.svg';
import GitLabSVG from '../../../icons/gitlab.svg';
import GitHubSVG from '../../../icons/github.svg';
import GlobeSVG from '../../../icons/globe.svg';

const HeadItemClasses = 'text-black flex gap-1 items-center';

export type CVPageProps = React.PropsWithChildren<{
    id: string;
    pdfHref: string;
}>;

export type CVHeaderProps = {};

export default function CVHeader() {
    return (
        <div className="flex flex-col gap-3">
            <div className="text-5xl font-bold font-accent text-blue-600">Alexandru Prisacariu</div>
            <div className="flex gap-4 flex-col lg:flex-row print:flex-row">
                <a className={HeadItemClasses} href={`mailto:${MailAddress}`}>
                    <MailSVG className="w-4 h-4" />
                    {MailAddress}
                </a>
                <a className={HeadItemClasses} href={WebsiteAddress}>
                    <GlobeSVG className="w-4 h-4" />
                    {WebsiteAddress}
                </a>
                <a className={HeadItemClasses} href={GitLabAddress}>
                    <GitLabSVG className="w-4 h-4" />
                    @AlexxanderX
                </a>
                <a className={HeadItemClasses} href={GitHubAddress}>
                    <GitHubSVG className="w-4 h-4" />
                    Aykelith
                </a>
            </div>
        </div>
    );
}
