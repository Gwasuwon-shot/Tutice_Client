import { useEffect } from "react";
import { styled } from "styled-components";
import { KakaoLessonShareIc } from "../../assets";

interface KakaoShareProp {
  url: string;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

export function KakaoShare(props: KakaoShareProp) {
  const { url } = props;

  useEffect(() => {
    handleClickKakao();
  }, []);

  const TEACHER = "김은수";
  const STUDENT = "박송현";

  function handleClickKakao() {
    if (window.Kakao) {
      const kakao = window.Kakao;
      //   console.log(kakao);
      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_APP_KAKAO_APP_KEY);
      }
      kakao.Share.createDefaultButton({
        container: "#kakao-link-btn",

        objectType: "feed",

        content: {
          title: "나무 코드 공유",
          description: `${TEACHER}선생님이 ${STUDENT} 학생의
          Tutice 초대장을 보냈습니다.${url}`,
          imageUrl: "/tutice.png",
          link: {
            webUrl: window.location.href,
            // 공유할 링크 주소
            // .replace(window.location.href,url),
            mobileWebUrl: window.location.href,
            // .replace(window.location.href,url),
          },
        },

        buttons: [
          {
            title: "튜티스",
            link: {
              webUrl: window.location.href,
              // .replace(window.location.href,url),
              mobileWebUrl: window.location.href,
              // .replace(window.location.href,url),
            },
          },
        ],
      });
    }
  }

  return (
    <button id="kakao-link-btn" onClick={handleClickKakao}>
      <KakaoLessonShareIcon />
    </button>
  );
}

const KakaoLessonShareIcon = styled(KakaoLessonShareIc)`
  width: 14.2rem;
  height: 6.4rem;
`;
