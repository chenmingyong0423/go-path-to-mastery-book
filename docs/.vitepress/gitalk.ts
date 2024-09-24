import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';

export default function createGitalk(id: string) {
    const gitalk = new Gitalk({
        clientID: 'Ov23lisxjSxC1Y2N3VjK',
        clientSecret: '0635aab5f24c452238f44a1e47f653973701ffb3',
        repo: 'go-path-to-mastery-book',
        owner: 'chenmingyong0423',
        admin: ['chenmingyong0423'],
        id: id,      // 确保唯一性和长度小于 50
        distractionFreeMode: false  // 类似 facebook 的无干扰模式
    });
    gitalk.render('gitalk-container');
}