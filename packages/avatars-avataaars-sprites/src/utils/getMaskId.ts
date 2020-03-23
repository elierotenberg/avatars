let maskId = 0;

export default function (createNew = true) {
    return `mask${createNew ? ++maskId : maskId}`;
}
