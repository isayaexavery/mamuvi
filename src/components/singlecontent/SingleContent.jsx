"use client";
import Image from "next/image";
import "./SingleContent.css";
import { img_300, unavailable } from "@/config/config";
import { useRouter } from "next/navigation";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  data,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/movie/" + id);
  };

  return (
    <div className="media" onClick={handleClick}>
      {/* <ContentModal media_type={media_type} id={id}> */}
      {/* <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      /> */}
      <Image
        className="poster"
        src={poster ? `${img_300 + poster}` : unavailable}
        alt={title}
        height={120}
        width={160}
      />
      <div className="more-details">
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          {/* <span className="subTitle">{date}</span> */}
        </span>
      </div>

      {/* </ContentModal> */}
    </div>
  );
};

export default SingleContent;
