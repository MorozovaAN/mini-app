import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Item } from './panels/Item/Item';
import { getItems } from './api/api.js';
import {
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  FormLayout,
  FormItem,
  Group,
  Search,
  Spinner,
  Button,
  Select,
  FormLayoutGroup,
  Title,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

const App = () => {
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [scheme, setScheme] = useState('vkcom_light');
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [sortValue, setSortValue] = useState('data');
  const sortOptions = [
    { value: 'date', label: 'по дате' },
    { value: 'relevance', label: 'по релевантности' },
  ];

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        setScheme(data.scheme);
      }
    });

    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      startSearch();
    }
  }, [sortValue]);

  const searchChange = (e) => {
    setData(null);
    setMessage(false);
    setSearchValue(e.target.value);
  };

  const startSearch = async (e) => {
    e?.preventDefault();
    const find = searchValue.trim();

    if (find) {
      setLoading(true);
      try {
        const data = await getItems(find, sortValue);
        data.length ? setData(data) : setMessage(true) && setData(null);
      } catch (e) {
        setError(true);
      }

      setLoading(false);
    }
  };

  const placeholder =
    window.innerWidth < 460
      ? 'Пример запроса: платье 44'
      : 'Напишите, что вы ищете, например: платье 44';

  return (
    <ConfigProvider appearance={scheme}>
      <AdaptivityProvider>
        <AppRoot className="app-root">
          <FormLayout onSubmit={startSearch}>
            <FormLayoutGroup className="form-content">
              <FormItem className="search">
                <Search
                  value={searchValue}
                  onChange={searchChange}
                  placeholder={placeholder}
                />
              </FormItem>

              <FormItem className="sort" top="Сортировать">
                <Select
                  sizeX="10"
                  options={sortOptions}
                  value={sortValue}
                  onChange={(e) => setSortValue(e.target.value)}
                />
              </FormItem>

              <FormItem className="button">
                <Button size="l" type="submit">
                  Найти
                </Button>
              </FormItem>
            </FormLayoutGroup>
          </FormLayout>

          {loading && <Spinner size="large" className="spinner" />}

          {data && !loading && (
            <>
              <Title level="2" className="totalPhotos">
                Найдено {data.length} фото:
              </Title>

              <Group padding="m" separator="hide" className="items-container">
                {data.map((el) => (
                  <Item
                    ownerId={el.owner_id}
                    photoId={el.photo_id}
                    sizes={el.sizes}
                    text={el.text}
                    date={el.date}
                    key={el.photo_id}
                  />
                ))}
              </Group>
            </>
          )}

          {message && !loading && (
            <p className="error-text">
              По запросу <b>"{searchValue}"</b> ничего не найдено
            </p>
          )}

          {error && !loading && (
            <p className="error-text">
              Что-то пошло не так, попробуйте еще раз
            </p>
          )}
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
