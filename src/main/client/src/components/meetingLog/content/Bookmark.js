import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { openModal } from '../../../modules/modal';
import DeleteBookmarkModal from '../../modal/DeleteBookmarkModal';
import ModifyBookmarkModal from '../../modal/ModifyBookmarkModal';

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: 0 2rem;
  background: ${palette.white};
  border-radius: 8px;
  border: 0.5px solid ${palette.gray2};

  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${palette.gray1};
  }

  h2 {
    font-size: 20px;
    margin: 2rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 120px;
  margin: 1rem 2rem;
  background: ${palette.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  img {
    margin: 2rem;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: 0.2s all;
    border-radius: 4px;
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    }
    img {
      margin: 0;
      padding: 0.25rem;
    }
  }

  .info {
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    span {
      font-size: 16px;
      font-weight: normal;
      color: ${palette.gray4};
    }
    span + span {
      margin-left: 2rem;
    }
  }
`;

const Menu = styled.div`
  position: absolute;
  top: -1rem;
  right: 5rem;
  width: 140px;

  background: ${palette.white};
  border: 1px solid ${palette.gray2};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    cursor: pointer;
    &:hover {
      background: ${palette.orange2};
    }

    span {
      color: ${palette.gray4};
      font-size: 18px;
      font-weight: normal;
      margin-left: 1.5rem;
    }

    img {
      margin: 0;
      height: 18px;
    }
  }

  div + div {
    border-top: 1px solid ${palette.gray2};
  }
`;

function Bookmark() {
  const dispatch = useDispatch();
  const [bookmarkInfo, setBookmarkInfo] = useState([]);
  const [menuState, setMenuState] = useState([]);
  // const [menuState, setMenuState] = useState({
  //   // 1: false,
  //   // 2: false,
  //   // 3: false,
  //   // 4: false,
  //   // 5: false,
  //   // 6: false,
  //   // 7: false,
  // });

  // const [bookmarkInfo, setBookmarkInfo] = useState([
  //   // {
  //   //   id: 1,
  //   //   title: '다음주 미팅 장소 회의',
  //   //   host: '남기복',
  //   //   time: '01:30',
  //   //   state: false,
  //   // },
  //   // {
  //   //   id: 2,
  //   //   title: '아키텍처 설계서 회의 시작',
  //   //   host: '방규빈',
  //   //   time: '03:31',
  //   //   state: false,
  //   // },
  //   // {
  //   //   id: 3,
  //   //   title: 'UI 설계서 회의 구간',
  //   //   host: '임희원',
  //   //   time: '05:26',
  //   //   state: false,
  //   // },
  //   // {
  //   //   id: 4,
  //   //   title: '내일 디스코드 회의 시간',
  //   //   host: '조하현',
  //   //   time: '06:01',
  //   //   state: false,
  //   // },
  //   // {
  //   //   id: 5,
  //   //   title: '마지막 기능 회의',
  //   //   host: '남기복',
  //   //   time: '06:15',
  //   //   state: false,
  //   // },
  //   // {
  //   //   id: 6,
  //   //   title: '회의 마지막 멘트',
  //   //   host: '남기복',
  //   //   time: '06:25',
  //   //   state: false,
  //   // },
  //   // {
  //   //   id: 7,
  //   //   title: '회의 마지막',
  //   //   host: '남기복',
  //   //   time: '06:34',
  //   //   state: false,
  //   // },
  // ]);

  useEffect(() => {
    fetch(`/api/minutes/${localStorage.getItem('minutesId')}/bookmark`, {
      method: 'GET',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Bookmark Info:', res);
        setBookmarkInfo(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    for (let i = 0; i < bookmarkInfo.length; i++) {
      setMenuState((menuState) => [...menuState, false]);
    }
  }, [bookmarkInfo]);

  const body = document.querySelector('body');

  const onCloseMenu = (e) => {
    const openBookmarkMenu = document.querySelector('.bookmarkMenu');

    if (
      openBookmarkMenu &&
      e.target.parentNode !== openBookmarkMenu &&
      e.target.parentNode.parentNode !== openBookmarkMenu
    ) {
      setMenuState({
        ...menuState,
        [openBookmarkMenu.getAttribute('id')]: false,
      });
      body.removeEventListener('click', onCloseMenu);
    }
  };

  const onClickMenuBtn = (id) => {
    setMenuState({ ...menuState, [id]: !menuState[id] });
    body.addEventListener('click', onCloseMenu);
  };

  const onClickModifyBookmark = (e) => {
      console.log(e.target);
      console.log(e.target.parent);
      console.log(e.currentTarget)
    const bookmarkId =e.target.getAttribute('id') || e.target.parent.getAttribute('id') || e.target.parent.parent.getAttribute('id') ;
    console.log(bookmarkId);
    dispatch(
      openModal('MODIFY_BOOKMARK', ModifyBookmarkModal, {
        title: '북마크 수정',
        okBtnText: '수정하기',
        okBtnBackgroundColor: 'orange',
        id: bookmarkId,
        memo: document.querySelector('.bookmarkMenu').previousSibling
          .previousSibling.previousSibling.textContent,
      }),
    );
  };

  const onClickDeleteBookmark = (e) => {
      const bookmarkId =e.target.getAttribute('id') || e.target.parent.getAttribute('id') || e.target.parent.parent.getAttribute('id') ;
    console.log(bookmarkId);
    dispatch(
      openModal('DELETE_BOOKMARK', DeleteBookmarkModal, {
        title: '정말로 삭제하시겠습니까?',
        okBtnText: '삭제하기',
        okBtnBackgroundColor: 'orange',
        id: bookmarkId,
      }),
    );
  };

  return (
    <Container>
      <h2>북마크</h2>
      <ContentWrapper>
        {bookmarkInfo.map(({ bookmarkId, memo, userName, createdDate }) => (
          <Content key={bookmarkId}>
            <img src="/icons/ic_bookmark_24px.png" alt="" />
            <span>{memo}</span>
            <button onClick={() => onClickMenuBtn(bookmarkId)}>
              <img src="/icons/bookmark_option.png" alt="" />
            </button>
            <div className="info">
              <span>{userName}</span>
              <span>{createdDate}</span>
            </div>
            {menuState[bookmarkId] && (
              <Menu id={bookmarkId} className={'bookmarkMenu'}>
                <div onClick={onClickModifyBookmark}>
                  <img src="/icons/ic_bookmark_modify.png" alt="" />
                  <span>메모 수정</span>
                </div>
                <div onClick={onClickDeleteBookmark}>
                  <img src="/icons/ic_bookmark_delete.png" alt="" />
                  <span>삭제</span>
                </div>
              </Menu>
            )}
          </Content>
        ))}
      </ContentWrapper>
    </Container>
  );
}

export default Bookmark;
