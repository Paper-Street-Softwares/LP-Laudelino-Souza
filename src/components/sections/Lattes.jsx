import { useTranslation } from "react-i18next";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../../components/interactives/Button";

export default function Lattes({ colorMode }) {
  const { t } = useTranslation();

  // Define background and text colors based on colorMode
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={true}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t("latters.miniTag")}
        sectionHeaderTitle={t("latters.title")}
        sectionHeaderSubtitle={t("latters.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode="dark"
      />
      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-center tablet1:flex-row">
          <Button
            label={t("latters.label")}
            buttonLink={content.texts.latters.linkButton}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
