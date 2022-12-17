import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Item } from './panels/Item/Item';
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
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

const App = () => {
  const [fetchedUser, setUser] = useState(null);
  const [scheme, setScheme] = useState('vkcom_light');
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

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

  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const startSearch = (e) => {
    e.preventDefault();
    setData(null);

    const find = searchValue.trim();
    if (find !== '') {
      setLoading(true);
      fetch(`https://99357.web.hosting-russia.ru/search/?search_query=${find}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot className="app-root">
          <FormLayout onSubmit={startSearch} className="form-content">
            <FormItem>
              <Search
                value={searchValue}
                onChange={searchChange}
                placeholder="Напишите, что вы ищите через пробел, например: платье 44"
              />
            </FormItem>
            {/* <FormItem>
              <Button>Найти</Button>
            </FormItem> */}
          </FormLayout>

          {loading && <Spinner size="medium" className="spinner" />}

          {data && !loading && (
            <Group padding="m" separator="hide" className="items-container ">
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
          )}

          {data && !data.length && searchValue && (
            <p>
              По запросу <b>"{searchValue}"</b> ничего не найдено
            </p>
          )}
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
