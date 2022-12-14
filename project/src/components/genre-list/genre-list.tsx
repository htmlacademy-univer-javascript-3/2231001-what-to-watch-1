import classNames from 'classnames';
import { Dispatch, FC, SetStateAction } from 'react';
import { VISIBLE_FILMS_COUNT_STEP } from '../../common/models';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import { changeActiveGenre } from '../../store/action';
import { Genre } from '../../types/genre.enum';

type Props = {
  genreList: string[];
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>;
}

const GenreList: FC<Props> = (props) => {
  const { genreList, setVisibleFilmsCount } = props;
  const { genre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleGenreChange = (newGenre: string) => {
    dispatch(changeActiveGenre({ newGenre: newGenre as Genre }));
    setVisibleFilmsCount(VISIBLE_FILMS_COUNT_STEP);
  };

  const getGenreListItemClasses = (g: string) => classNames({
    'catalog__genres-item': true,
    'catalog__genres-item--active': g === genre
  });

  return (
    <ul className="catalog__genres-list">
      {
        genreList.map((g) => (
          <li className={getGenreListItemClasses(g)} key={g} onClick={() => handleGenreChange(g)}>
            <span className="catalog__genres-link">{g}</span>
          </li>
        ))
      }
    </ul>
  );
};

export default GenreList;
