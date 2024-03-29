//= Functions
// Own
import classNames from 'classnames';

//= React components
// Own
import { MenuTag, GitLabTag, GitHubTag, MyEmailTag } from '../../tags';
// Others
import Link from "next/link";

//= Assets
// Own
import HomeSVG from "../../../icons/home.svg";

export type HeaderProps = {
    small?: boolean;
    useH2?: boolean;
    showContacts?: boolean;
    showHome?: boolean;
};

export default function Header({ small, useH2, showContacts = true, showHome = false }: HeaderProps) {
    const titleClasses = classNames('font-accent font-bold', { 'text-4xl': !small }, { 'text-2xl': small });

    return (
        <header>
            <Link href="/" className="cursor-pointer hover:underline text-black">{useH2 ? <h2 className={titleClasses}>Alexandru Prisacariu</h2> : <h1 className={titleClasses}>Alexandru Prisacariu</h1>}</Link>
            {showContacts && (
                <div className="mt-2 mb-4 flex gap-2 flex-wrap">
                    <GitLabTag />
                    <GitHubTag />
                    <MyEmailTag />
                </div>
            )}
            <div className="mt-2 flex gap-2 flex-wrap">
                { showHome && <MenuTag href="/"><HomeSVG/></MenuTag> }
                <MenuTag href="/about_me">About me</MenuTag>
                <MenuTag href="/projects">Projects</MenuTag>
                <MenuTag href="/blog/1">Blog</MenuTag>
                <MenuTag href="/cv">Resume/CV</MenuTag>
            </div>
        </header>
    );
}
