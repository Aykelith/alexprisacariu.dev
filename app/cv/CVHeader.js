//= Types & Enums & Consts
// Own
import MailAddress from "@/constants/MailAddress";
import WebsiteAddress from "@/constants/WebsiteAddress";
import GitHubAddress from "@/constants/GitHubAddress";
import GitLabAddress from "@/constants/GitLabAddress";
import WebsiteAddressWithoutProtocol from "@/constants/WebsiteAddressWithoutProtocol";

//= Assets
// Own
import MailSVG from "@/components/icons/mail.svg";
import GitLabSVG from "@/components/icons/gitlab.svg";
import GitHubSVG from "@/components/icons/github.svg";
import GlobeSVG from "@/components/icons/globe.svg";

const HeadItemClasses = "black flex gap-1 items-center";

export default function CVHeader() {
    return (
        <div className="flex flex-col gap-3">
            <div className="text-5xl font-bold font-accent text-blue-600">
                Alexandru Prisacariu
            </div>
            <div className="flex gap-4 flex-col lg:flex-row print:flex-row">
                <a className={HeadItemClasses} href={`mailto:${MailAddress}`}>
                    <MailSVG className="w-4 h-4" />
                    {MailAddress}
                </a>
                <a className={HeadItemClasses} href={WebsiteAddress}>
                    <GlobeSVG className="w-4 h-4" />
                    {WebsiteAddressWithoutProtocol}
                </a>
                <a className={HeadItemClasses} href={GitLabAddress}>
                    <GitLabSVG className="w-4 h-4" />
                    AlexxanderX
                </a>
                <a className={HeadItemClasses} href={GitHubAddress}>
                    <GitHubSVG className="w-4 h-4" />
                    Aykelith
                </a>
            </div>
        </div>
    );
}
