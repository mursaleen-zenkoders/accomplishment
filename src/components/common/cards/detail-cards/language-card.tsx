import { FormData } from '@/types/others/candidate/get-candidate-folio/get-candidate-folio-response';
import { formatToDDMMYYYY } from '@/utils/date-format';
import Image from 'next/image';
import Link from 'next/link';
import book from 'public/icons/book.svg';
import building from 'public/icons/building.svg';
import linkIcon from 'public/icons/link.svg';
import note from 'public/icons/note.svg';
import language from 'public/pdf/language.svg';
import { FC } from 'react';
import Box from '../../box';

interface IProps {
  form_data?: FormData;
}

const LanguageCard: FC<IProps> = ({ form_data }) => {
  const {
    years_of_study: yearsOfStudy,
    accomplishment_name: title,
    date,
    institution: institute,
    language: lang,
    ap_score: apScore,
    notes,
    link,
  } = form_data || {};

  const validUrl =
    link?.startsWith('http://') || link?.startsWith('https://') ? link : `https://${link}`;

  return (
    <Box>
      <div>
        {title && (
          <p className="!text-sm font-medium !text-heading font-quicksand break-all capitalize">
            {title}
          </p>
        )}
        {date && (
          <p className="font-quicksand text-[var(--gray-60)] font-normal text-xs">
            {formatToDDMMYYYY(date)}
          </p>
        )}
      </div>
      {(lang || yearsOfStudy || institute) && (
        <div className="space-y-2">
          {lang && (
            <div className="flex items-center gap-x-2">
              <Image className="size-5" alt="" src={language} />
              <p className="font-quicksand font-medium text-sm text-[var(--black)]">{lang}</p>
            </div>
          )}
          {yearsOfStudy && (
            <div className="flex items-center gap-x-2">
              <Image className="size-5" alt="" src={book} />
              <p className="font-quicksand font-normal w-full flex items-center justify-between text-sm text-[var(--black)]">
                Years of Study
                <span className="font-medium">{yearsOfStudy}</span>
              </p>
            </div>
          )}
          {institute && (
            <div className="flex items-center gap-x-2">
              <Image className="size-5" alt="" src={building} />
              <p className="font-quicksand font-normal text-sm text-[var(--gray-70)]">
                {institute}
              </p>
            </div>
          )}
        </div>
      )}
      {apScore && (
        <div className="bg-[var(--gray-light)] rounded-md p-4 text-[var(--heading)] text-center font-medium">
          AP Score {apScore}
        </div>
      )}
      {(lang || yearsOfStudy || institute || apScore || notes || link) && (
        <hr className="-my-2 border border-[var(--gray-10)]" />
      )}

      {link && (
        <div className="flex items-center gap-x-2">
          <Image src={linkIcon} sizes="20" alt="" />
          <Link href={validUrl} className="text-[var(--blue)] text-xs font-normal font-quicksand">
            {link}
          </Link>
        </div>
      )}

      {notes && (
        <div className="flex gap-x-1.5 items-start">
          <Image src={note} alt="note" className="size-5" />
          <p className="text-[var(--gray-70)] text-sm font-normal font-quicksand break-all">
            {notes}
          </p>
        </div>
      )}
    </Box>
  );
};

export default LanguageCard;
