import calculator from "./calculator";

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    function showTabContent(index = 0) {
        tabsContent[index].style.display = 'block';
        tabs[index].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', ({target}) => {
        // const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, index) => {
                console.log(target, index);
                if (target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            })
        }
    })
}

// module.exports = tabs;
export default tabs;