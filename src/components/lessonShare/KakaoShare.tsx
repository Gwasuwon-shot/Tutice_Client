import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { KakaoLessonShareIc } from "../../assets";
import { studentNameState } from "../../atom/common/datePicker";
import useGetLessonByUser from "../../hooks/useGetLessonByUser";

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
  const { userName } = useGetLessonByUser();
  const [studentName, setStudentName] = useRecoilState<string>(studentNameState);

  useEffect(() => {
    handleClickKakao();
  }, []);

  function handleClickKakao() {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_APP_KAKAO_APP_KEY);
      }
      kakao.Share.createDefaultButton({
        container: "#kakao-link-btn",

        objectType: "feed",

        content: {
          title: "수업링크 코드 공유",
          description: `안녕하세요, 과외 수업 관리 필수 앱 Tutice 입니다. \n[${userName}]선생님이 [${studentName}]학생의\nTutice 초대장을 보냈습니다.\n\nTutice 링크 \n ${url}`,
          imageUrl: "/tutice.png",
          link: {
            // webUrl: window.location.href,
            // 공유할 링크 주소
            // webUrl: `https://www.tutice.com/${code}`,
            // .replace(window.location.href,url),
            // mobileWebUrl: window.location.href,
            webUrl: url,
            mobileWebUrl: url,
            // mobileWebUrl: `https://www.tutice.com/${code}`,
            // .replace(window.location.href,url),
          },
        },

        buttons: [
          {
            title: "튜티스",
            link: {
              // webUrl: window.location.href,
              // .replace(window.location.href,url),
              // mobileWebUrl: window.location.href,
              webUrl: url,
              mobileWebUrl: url,
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
