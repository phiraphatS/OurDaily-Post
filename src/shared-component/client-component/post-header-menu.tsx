import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

interface IProps {
    deletePost: () => void;
    lookPost: () => void;
    isPersonal: boolean;
}

export default function PostHeaderMenu({ deletePost, lookPost, isPersonal }: IProps) {
    return (
        <Menu autoSelect={false}>
            <MenuButton
                as={IconButton}
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical />}
            />
            <MenuList>
                <MenuItem icon={<AddIcon />} onClick={lookPost}>
                    Look this post
                </MenuItem>
                {isPersonal && (
                    <MenuItem icon={<BiTrash />} onClick={deletePost}>
                        Move to Trash
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}
