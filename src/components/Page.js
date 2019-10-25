import React, { useEffect } from 'react';
import { Layout } from 'antd';

const Page = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return <Layout.Content>{children}</Layout.Content>;
};

export default Page;
